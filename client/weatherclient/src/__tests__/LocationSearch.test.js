import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom'
import LocationSearch from "../views/LocationSearch"
import useRetrieveForecast from "../hooks/useRetrieveForecast";

jest.mock('../hooks/useCities', () => ({
    __esModule: true,
    default: () => ({
      fetchedData: [
        { country: 'Spain', cities: ['Madrid', 'Malaga'] },
        { country: 'Poland', cities: ['Krakow', 'Warsaw', 'Poznan', 'Warmia'] },
      ],
    }),
  }))
//   jest.mock('../hooks/useRetrieveForecast', () => ({
//     __esModule: true,
//     default: () => ({
//       fetchForecastByCity: jest.fn(),
//     }),
//   }));

describe("LocationSearch", () => {
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
    // test("clicking on a suggestion fetches city forecast", async () => {
    //     render(<LocationSearch />);
    //     const inputElement = screen.getByPlaceholderText(/Search by city name.../i);
    //     fireEvent.change(inputElement, { target: { value: 'Warsaw' } });

    //     await waitFor(() => {
    //         expect(screen.getByText('Warsaw, Poland')).toBeInTheDocument();
    //     });
    //     fireEvent.click(screen.getByText('Warsaw, Poland'));
    //     await waitFor(() => {
    //         expect(useRetrieveForecast().fetchForecastByCity).toHaveBeenCalledWith('Warsaw', expect.any(Function));
    //     });
    // });
})