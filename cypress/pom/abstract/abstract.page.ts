/* eslint-disable @typescript-eslint/ban-types */
abstract class AbstractPage {
    abstract goto(): void; // Goto method to navigate directly to that page.
    abstract click: Record<string, Function> // Object containing all the click methods.
    abstract actions: Record<string, Function> // Object containing all the generic actions.
    abstract assertions: Record<string, Function> // Object containing all the assertions.
}

export default AbstractPage;