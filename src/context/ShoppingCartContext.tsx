import { createContext, useContext, ReactNode } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}


type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}


const ShoppingCartContext = createContext({})

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}



export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}