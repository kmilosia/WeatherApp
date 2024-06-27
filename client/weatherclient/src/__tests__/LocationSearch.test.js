import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom'
import LocationSearch from "../views/LocationSearch"

jest.mock('../hooks/useCities', () => ({
    __esModule: true,
    default: () => ({
      fetchedData: [
        { country: 'Spain', cities: ['Madrid', 'Malaga'] },
        { country: 'Poland', cities: ['Krakow', 'Warsaw', 'Poznan', 'Warmia'] },
      ],
    }),
  }))
  jest.mock('../utils/fetchForecast', () => ({
    fetchForecastByCity: jest.fn(),
  }))

describe("LocationSearch", () => {
    test("should call fetchForecastByCity when suggestion is clicked", async () => {
        render(<LocationSearch />)
        const inputField = screen.getByPlaceholderText(/Search by city name.../i)
        fireEvent.change(inputField, { target: { value: 'Mad' } })
        const suggestionElement = screen.getByText('Madrid, Spain')
        fireEvent.click(suggestionElement)
        expect(require('../utils/fetchForecast').fetchForecastByCity).toHaveBeenCalledWith('Madrid', expect.any(Function))   
    })
    test("input is rendered and focused on render", async () => {
        render(<LocationSearch />)
        const inputElement = screen.getByPlaceholderText(/Search by city name.../i)
        expect(inputElement).toBeInTheDocument()
        expect(inputElement).toHaveFocus()
    })
    test("suggest city array according to the input", async () => {
        render(<LocationSearch />)
        const inputElement = screen.getByPlaceholderText(/Search by city name.../i)
        expect(inputElement).toBeInTheDocument()
        fireEvent.change(inputElement, { target: { value: 'War' } })
        await waitFor(() => {
            expect(screen.getByText('Warsaw, Poland')).toBeInTheDocument()
            expect(screen.getByText('Warmia, Poland')).toBeInTheDocument()
        })
        fireEvent.change(inputElement, { target: { value: 'Warsaw' } })
        await waitFor(() => {
            expect(screen.getByText('Warsaw, Poland')).toBeInTheDocument()
            expect(screen.queryByText('Warmia, Poland')).not.toBeInTheDocument()
        })
    })
    test("buttons clear input and suggestions array", async () => {
        render(<LocationSearch />)
        const inputElement = screen.getByPlaceholderText(/Search by city name.../i)
        expect(inputElement).toBeInTheDocument()
        fireEvent.change(inputElement, { target: { value: 'Warsaw' } })
        await waitFor(() => {
            expect(screen.getByText('Warsaw, Poland')).toBeInTheDocument()
        })
        const clearButton = screen.getByTestId("clear-input-btn")
        fireEvent.click(clearButton)
        await waitFor(() => {
            expect(screen.queryByText('Warsaw, Poland')).not.toBeInTheDocument()
            expect(inputElement.value).toBe("")
        })
    })
  
})