# React Plain Toast

## Installation

In the project directory, you can run:

#### `npm install react-plain-toast`

## Usage

Import The Toast componnent

#### `import Toaster, { toast } from "react-plain-toast";`

Call the toast function

#### `toast({type: "success", title: "Success!!", description: "Description here.", }); }`

Setup Properties for each Toast

## Example Trigger

#### ``

          <button
            onClick={() =>
              addToast({
                type: "success",
                title: "Success!!",
                description: "This is an example success toast component",
              })
            }
          >
            Test Button - Function
          </button>
