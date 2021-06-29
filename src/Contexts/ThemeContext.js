import React , {useContext , useState} from 'react'
const ChangeTheme = React.createContext()
export function UseTheme() {
    return useContext(ChangeTheme)
}
function ThemeContext({children}) {
const [Theme, setTheme] = useState(true)
const ThemeChange = () => setTheme(!Theme)
const value = {
  Theme,
  ThemeChange,
}
    return (
        <ChangeTheme.Provider value={value}>
            {children}
        </ChangeTheme.Provider>
    )
}

export default ThemeContext

