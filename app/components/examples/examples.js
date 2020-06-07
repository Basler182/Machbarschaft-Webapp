import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ThemeContext, {ThemeProvider} from "../../contexts/examples/theme";
import {Divider, Typography} from "antd";
import NavigationExample from "./navigation-example";

const {Text} = Typography;

{/* Lazy loading of componenents. App-Bundle is split up into different parts, each of which is only loaded if needed. Immense speedup for larger applications. */}
const UseStateExample = React.lazy(() => import("./use-state-example"))
const UseEffectExample = React.lazy(() => import("./use-effect-example"))
const UseReducerExample = React.lazy(() => import("./use-reducer-example"))
const APICallExample = React.lazy(() => import("./api-call-example"))
const ConsumerProviderExample = React.lazy(() => import("./consumer-provider-example"))
const CustomHookExample = React.lazy(() => import("./custom-hook-example"))
const FormExample = React.lazy(() => import("./form-example"))
const FontSizeExample = React.lazy(() => import("./use-font-sizer"))

export default function Examples() {
    const [theme, setTheme] = React.useState('light')
    const toggleTheme = () => setTheme((theme) => theme === 'light' ? 'dark' : 'light')

    return (
        <Router>
            {/* Inserts a provider into the render tree. Components below may now access value of ThemeProvider. */}
            <ThemeProvider value={theme}>
                <NavigationExample/>
                <Divider/>

                {/* React.Suspense is necessary to provide a fallback, if imports are still being lazy loaded. */}
                <React.Suspense fallback={<Text>Lädt...</Text>}>
                    <Switch>
                        {/* Just define the respective component per route */}
                        <Route exact path={"/examples/use-state"} component={UseStateExample}/>
                        <Route exact path={"/examples/use-effect"} component={UseEffectExample}/>
                        <Route exact path={"/examples/use-reducer"} component={UseReducerExample}/>
                        <Route exact path={"/examples/api-call"} component={APICallExample}/>
                        {/* If you want to pass props to a component, you need to use the render prop (that gets passed a function that renders the component) */}
                        <Route exact path={"/examples/consumer-provider"}
                               render={() => <ConsumerProviderExample toggleTheme={toggleTheme}/>}/>
                        <Route exact path={"/examples/custom-hook"} component={CustomHookExample}/>
                        <Route exact path={"/examples/form"} component={FormExample}/>
                        <Route exact path={"/examples/use-font-sizer"} component={FontSizeExample}/>
                    </Switch>
                </React.Suspense>
            </ThemeProvider>
        </Router>
    )
}