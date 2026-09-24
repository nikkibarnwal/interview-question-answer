```js
const Button = ({
  children,
  variant,
  size,
  loading = false,
  disabled = false,
  onClick,
  type = "button"
}) => {
  return <button
    type={type}
    disabled={disabled || loading}
    onClick={onClick}
    className={`btn ${variant} ${size}`}
  >
    {loading ? `...loading` : children}
  </button>
};


export default Button;

```
### Usage
```js
<Button onClick={handleClick}>
   count {count}
</Button>
```
