import React from "react"
import Header from "./header"
import Footer from "./footer"

export function withHeaderAndFooter(WrapComponent) {
  return () => (
    <>
      <Header />
      <WrapComponent />
      <Footer />
    </>
  )
}
