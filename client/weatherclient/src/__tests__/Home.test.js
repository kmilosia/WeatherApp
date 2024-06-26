import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom'
import Home from "../routes/Home"


describe("Home", () => {
    test("menu is closed on render", async () => {
        render(<Home />)
        await waitFor(() => {
            expect(screen.getByTestId("menu-div")).not.toHaveClass('translate-x-0')
        })
    })
    // test("forecast menu button toggles menu component", async () => {
    //     render(<Home />)
    //     const toggleMenuElement = screen.getByTestId("toggle-menu-btn")
    //     fireEvent.click(toggleMenuElement)
    //     await waitFor(() => {
    //         expect(screen.getByTestId("menu-div")).toHaveClass('translate-x-0')
    //     })
    //     fireEvent.click(toggleMenuElement)
    //     await waitFor(() => {
    //         expect(screen.getByTestId("menu-div")).not.toHaveClass('translate-x-0');
    //     })
    // })
    // test("menu close button closes menu component", async () => {
    //      render(<Home />)
    //      const toggleMenuElement = screen.getByTestId("toggle-menu-btn")
    //      fireEvent.click(toggleMenuElement)
    //      await waitFor(() => {
    //          expect(screen.getByTestId("menu-div")).toHaveClass('translate-x-0')
    //      }) 
    //      const closeButtonElement = screen.getByTestId("close-menu-btn")
    //      fireEvent.click(closeButtonElement)
    //      await waitFor(() => {
    //          expect(screen.getByTestId("menu-div")).not.toHaveClass('translate-x-0')
    //      })
    // })   
    // test("menu settings button open settings component and close button inside settings closes it", async () => {
    //     render(<Home />)
    //     const toggleMenuElement = screen.getByTestId("toggle-menu-btn")
    //     fireEvent.click(toggleMenuElement)
    //     await waitFor(() => {
    //         expect(screen.getByTestId("menu-div")).toHaveClass('translate-x-0')
    //     }) 
    //     const settingsButtonElement = screen.getByTestId("settings-menu-btn")
    //     fireEvent.click(settingsButtonElement)
    //     const settingsHeader = await screen.findByText(/Settings/i)
    //     expect(settingsHeader).toBeInTheDocument()
    //     const settingsButtonCloseElement = await screen.findByTestId("settings-close-btn")
    //     expect(settingsButtonCloseElement).toBeInTheDocument()
    //     fireEvent.click(settingsButtonCloseElement)
    //     expect(settingsHeader).not.toBeInTheDocument()
    // })
    // test("menu search button open search component and close button inside search closes it", async () => {
    //     render(<Home />)
    //     const toggleMenuElement = screen.getByTestId("toggle-menu-btn")
    //     fireEvent.click(toggleMenuElement)
    //     await waitFor(() => {
    //         expect(screen.getByTestId("menu-div")).toHaveClass('translate-x-0')
    //     }) 
    //     const searchMenuButton = screen.getByTestId("search-menu-btn")
    //     fireEvent.click(searchMenuButton)
    //     const searchHeader = await screen.findByText(/Search locations/i)
    //     expect(searchHeader).toBeInTheDocument()
    //     const searchButtonCloseElement = await screen.findByTestId("search-close-btn")
    //     expect(searchButtonCloseElement).toBeInTheDocument()
    //     fireEvent.click(searchButtonCloseElement)
    //     expect(searchHeader).not.toBeInTheDocument()
    // })
                    
})