import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import MenuButton from "../components/menu/MenuButton"
import { useMenuStore } from "../store/menuStore";

// let menuState = useMenuStore.getState();
const mockAction = jest.fn();

describe("MenuButton", () => {
    let toggleMenuMock = jest.spyOn(useMenuStore.getState(), 'toggleMenu');
    // beforeEach(() => {
    //     menuState = useMenuStore.getState();
    //     useMenuStore.setState(menuState)
    //     jest.clearAllMocks()
    // })
    test("button is rendered", () => {
        render(<MenuButton icon={() => <div>Icon</div>} />)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })
    test('button click calls closeMenu and action', () => {
        // jest.spyOn(useMenuStore.getState(), 'toggleMenu');
        render(<MenuButton icon={() => <div />} action={mockAction} closeButton={true} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(toggleMenuMock).toHaveBeenCalledWith(false);
        // expect(useMenuStore.getState().toggleMenu).toHaveBeenCalledWith(false);
    })
    test("closebutton true gives button class block and button click doesn't run action", async () => {
        render(<MenuButton icon={() => <div />} action={mockAction} closeButton={true} />);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('block')
        fireEvent.click(button);
        expect(mockAction).not.toHaveBeenCalled();
    })
    test("closebutton false not gives button class block and button click runs action", async () => {
        render(<MenuButton icon={() => <div />} action={mockAction} closeButton={false} />);
        const button = screen.getByRole('button');
        expect(button).not.toHaveClass('block')
        fireEvent.click(button);
        expect(mockAction).toHaveBeenCalled();
    })
})