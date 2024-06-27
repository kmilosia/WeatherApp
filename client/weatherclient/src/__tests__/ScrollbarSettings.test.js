import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import ScrollbarSettings from "../components/settings/ScrollbarSettings"
import { useSettingsStore } from "../store/settingsStore"

jest.mock('../store/settingsStore', () => ({
    useSettingsStore: jest.fn(),
  }))

describe("ScrollbarSettings", () => {
  let store

  test("toggle scrollbar visibility in store to true", () => {
    store = {
        scrollbarVisibility: false,
        toggleScrollbar: jest.fn(),
    }
    useSettingsStore.mockReturnValue(store)
    render(<ScrollbarSettings />)
    const toggleSwitch = screen.getByRole('checkbox')
    expect(toggleSwitch).not.toBeChecked()
    const toggleTitleHidden = screen.getByText("Hidden")
    expect(toggleTitleHidden).toBeInTheDocument()
    fireEvent.click(toggleSwitch)
    expect(store.toggleScrollbar).toHaveBeenCalledWith(true)
    const toggleTitleVisible = screen.getByText("Visible")
    expect(toggleTitleVisible).toBeInTheDocument()
  })

  test("toggle scrollbar visibility in store to false", () => {
    store = {
        scrollbarVisibility: true,
        toggleScrollbar: jest.fn(),
    }
    useSettingsStore.mockReturnValue(store)
    render(<ScrollbarSettings />)
    const toggleSwitch = screen.getByRole('checkbox')
    expect(toggleSwitch).toBeChecked()
    const toggleTitleVisible = screen.getByText("Visible")
    expect(toggleTitleVisible).toBeInTheDocument()
    fireEvent.click(toggleSwitch)
    expect(store.toggleScrollbar).toHaveBeenCalledWith(false)
    const toggleTitleHidden = screen.getByText("Hidden")
    expect(toggleTitleHidden).toBeInTheDocument()
  })
})