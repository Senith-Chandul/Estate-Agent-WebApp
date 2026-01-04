import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { describe, test, expect } from 'vitest';
import App from './App';
import SearchPage from './pages/SearchPage';

// Helper to wrap components (ONLY for pages like SearchPage that don't have their own router)
const renderWithProviders = (component) => {
    return render(
        <FavoritesProvider>
            <DndProvider backend={HTML5Backend}>
                <BrowserRouter>
                    {component}
                </BrowserRouter>
            </DndProvider>
        </FavoritesProvider>
    );
};

describe('Estate Agent App Tests', () => {

    // TEST 1: Smoke Test
    test('renders the main App component', () => {
        render(<App />);
        const logoElement = screen.getByText(/Estate Agent App/i);
        expect(logoElement).toBeInTheDocument();
    });

    // TEST 2: Search Functionality
    test('renders search filter inputs correctly', () => {
        renderWithProviders(<SearchPage />);

        const typeLabel = screen.getByText(/Type/i);
        expect(typeLabel).toBeInTheDocument();

        const postcodeInput = screen.getByPlaceholderText(/e.g. NW1/i);
        expect(postcodeInput).toBeInTheDocument();

        fireEvent.change(postcodeInput, { target: { value: 'BR1' } });
        expect(postcodeInput.value).toBe('BR1');
    });

    // TEST 3: Results Display
    test('renders property results from JSON data', () => {
        renderWithProviders(<SearchPage />);

        const resultsHeading = screen.getByRole('heading', { name: /Results/i });
        expect(resultsHeading).toBeInTheDocument();

        const priceElements = screen.getAllByText(/£/i);
        expect(priceElements.length).toBeGreaterThan(0);
    });

    // TEST 4: Favorites System
    test('renders the favorites sidebar empty initially', () => {
        renderWithProviders(<SearchPage />);

        const favHeading = screen.getByRole('heading', { name: /Favourites/i });
        expect(favHeading).toBeInTheDocument();

        const emptyMsg = screen.getByText(/No favourites yet/i);
        expect(emptyMsg).toBeInTheDocument();
    });

    // TEST 5: Navigation
    test('property cards contain a valid View Details link', () => {
        renderWithProviders(<SearchPage />);

        const detailLinks = screen.getAllByText(/View Details/i);
        expect(detailLinks[0]).toBeInTheDocument();
        expect(detailLinks[0].closest('a')).toHaveAttribute('href');
    });

    // TEST 6: Search Logic (Distinction Level)
    test('filters properties when searching', async () => {
        renderWithProviders(<SearchPage />);

        const typeSelect = screen.getByRole('combobox');

        fireEvent.change(typeSelect, { target: { value: 'Flat' } });

        const searchBtn = screen.getByRole('button', { name: /Search/i });
        fireEvent.click(searchBtn);

        const flatResults = await screen.findAllByText(/Flat/i);
        expect(flatResults.length).toBeGreaterThan(0);
    });

});