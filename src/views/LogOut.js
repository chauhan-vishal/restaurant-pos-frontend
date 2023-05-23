import React from 'react'

export default function LogOut() {
  localStorage.removeItem("login")
  localStorage.removeItem("customerName")
  localStorage.removeItem("customer")
  window.location.href = "/"
  return <></>
}
