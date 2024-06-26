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
    test("forecast menu button toggles menu component", async () => {
        render(<Home />)
        const toggleMenuElement = screen.getByTestId("toggle-menu-btn")
        fireEvent.click(toggleMenuElement)
        await waitFor(() => {
            expect(screen.getByTestId("menu-div")).toHaveClass('translate-x-0')
        })
        fireEvent.click(toggleMenuElement)
        await waitFor(() => {
            expect(screen.getByTestId("menu-div")).not.toHaveClass('translate-x-0');
        })
    })
    test("menu close button closes menu component", async () => {
         render(<Home />)
         const toggleMenuElement = screen.getByTestId("toggle-menu-btn")
         fireEvent.click(toggleMenuElement)
         await waitFor(() => {
             expect(screen.getByTestId("menu-div")).toHaveClass('translate-x-0')
         }) 
         const closeButtonElement = screen.getByTestId("close-menu-btn")
         fireEvent.click(closeButtonElement)
         await waitFor(() => {
             expect(screen.getByTestId("menu-div")).not.toHaveClass('translate-x-0')
         })
    })   
    // test("close settings on close button click", async () => {
    //     render(<Home />)
    //                 const closeButtonElement = screen.getByTestId("toggle-menu-btn")
    //         fireEvent.click(closeButtonElement)
    //         await waitFor(() => {
    //             expect(screen.getByTestId("menu-div")).not.toHaveClass('translate-x-0');
    //         });

    //     const settingsButtonElement = screen.getByTestId("settings-menu-btn")
    //     fireEvent.click(settingsButtonElement)
    //     await waitFor(() => {
    //         expect(screen.getByText(/Settings/i)).toBeInTheDocument();
    //     });
       
    // })
    //     test("menu search button opens search component", async () => {
    //         render(<Home />)
    //         const searchButtonElement = screen.getByTestId("search-menu-btn")
    //         fireEvent.click(searchButtonElement)
    //         await waitFor(() => {
    //             expect(screen.getByPlaceholderText(/Search by city name.../i)).toBeInTheDocument();
    //         });
    //     })
    //     test("menu settings button opens settings component", async () => {
    //         render(<Home />)
    //         const settingsButtonElement = screen.getByTestId("settings-menu-btn")
    //         fireEvent.click(settingsButtonElement)
    //         await waitFor(() => {
    //             expect(screen.getByText(/Settings/i)).toBeInTheDocument();
    //         });
    //     })
   
        
            
})