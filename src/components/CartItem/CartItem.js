function CartItem({
  cartItem,
  incrementCartItemQuantity,
  decrementCartItemQuantity
}) {
  return (
    <li key={cartItem.id}>
      <img
        className="cart--item-icon"
        src={`/assets/icons/${cartItem.id}.svg`}
        alt={cartItem.name}
      />
      <p>{cartItem.name}</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={() => decrementCartItemQuantity(cartItem)}
      >
        -
      </button>
      <span className="quantity-text center">{cartItem.quantity}</span>
      <button
        className="quantity-btn add-btn center"
        onClick={() => incrementCartItemQuantity(cartItem)}
      >
        +
      </button>
    </li>
  )
}

export default CartItem
