# React Plain Toast

Simple, lightweight Toast for React. Comes with 4 built in types.

## Installation

In the project directory, run:

```
npm install react-plain-toast
```

## Usage

Import The Toast componnent

```jsx
import Toaster, { toast } from "react-plain-toast";
```

Call the toast function

```jsx
toast({
  type: "success",
  title: "Success!!",
  description: "Description here.",
});
```

## Example Usage

```jsx
import Toaster, { toast } from "react-plain-toast";

const toastOptions = {
  type: "success",
  title: "Success!!",
  description: "Description here.",
};
const addToast = () => toast(toastOptions);

const App = () => {
  return (
    <div>
      <button onClick={addToast}>Show Toast</button>
      <Toaster position={top - left} />
    </div>
  );
};
```

## Toaster Configuration

These props are put directly on the Toaster component. They are are all optional.

### Props

#### position

Type: `string`

Default: `bottom-right`

Acceptable Values: `bottom-left, bottom-right, top-left, top-right`

Sets the position of all Toasts.

#### autoDeleteTime

Type: `number`

Default: `0`

Acceptable Values: Any number above 0. Set in milliseconds. Ex for 3 seconds: `3000`

When set to a number above 0 the Toast will automatically delete itself.

### Example

```jsx
<Toaster position="top-left" autoDelete={3000} />
```

## toast Configuration

These options are set in the toast function.

### Options

#### type

Required

Type: `string`

Acceptable Values: `success, warning, info, danger`

#### title

Required

Type: `string`

Acceptable Values: Any string. Ex: `Toast Title`

#### description

Required

Type: `string`

Acceptable Values: Any string. Ex: `Toast description.`

#### backgroundColor

Type: `string`

Acceptable Values: Any hex code Ex: `#ff0000`

### Example

```jsx
toast({
  type: "info",
  title: "Info Title",
  description: "Info Description",
  backgroundColor: "#c0c0c0;",
});
```
