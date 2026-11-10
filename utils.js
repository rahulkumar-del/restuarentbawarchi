import { createInitialState } from "./data"

export const STORE_KEY = "friends-bawarchi-state-v1"
export const CART_KEY = "friends-bawarchi-cart-v1"

export function loadStore() {
  try {
    const saved = window.localStorage.getItem(STORE_KEY)
    if (!saved) return createInitialState()
    const parsed = JSON.parse(saved)
    return { ...createInitialState(), ...parsed }
  } catch {
    return createInitialState()
  }
}

export function saveStore(store) {
  try { window.localStorage.setItem(STORE_KEY, JSON.stringify(store)) } catch { /* static prototype */ }
}

export function loadCart() {
  try { return JSON.parse(window.localStorage.getItem(CART_KEY) || "[]") } catch { return [] }
}

export function saveCart(cart) {
  try { window.localStorage.setItem(CART_KEY, JSON.stringify(cart)) } catch { /* static prototype */ }
}

export const money = (value) => `₹${Number(value || 0).toLocaleString("en-IN")}`
export const sampleMoney = (value) => `${money(value)}*`
export const shortDate = () => new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date())
export const initials = (name = "FB") => name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase()
export const nextId = (prefix) => `${prefix}-${Math.random().toString(36).slice(2, 7)}`
export const clamp = (n, min, max) => Math.min(Math.max(n, min), max)
