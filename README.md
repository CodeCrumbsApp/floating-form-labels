## Floating Form Labels

To use the Floating Form Labels crumb we need to call the `floatLabels` function and pass it our options.

### Options:
| Options | Description |
| --- | --- |
| `inputSelector` | To targets all the inputs. Can be a `class`, `id`, `html tag`, or `attribute`
| `labelActiveClass` | A `class` name value that will be added to the field label when the input is focused or has a value. |


### Example use:
```js
window.CodeCrumbs.floatLabels({
  // options
  inputSelector: ".input",
  labelActiveClass: "float",
})
```
