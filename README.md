Web App React with Redux. Validation Form using react-hook-form.
API service consume (axios). (API => https://github.com/LuisEdMB/API.Backend.JWT.Restful)

Note: When you add react-hook-form package, you can modify the file "types.d.ts" (from react-hook-form package), replacing with this:</br>
-> <b>export declare type FieldErrors<FormValues> = FieldError<FormValues>;</b>(line 76)</br>
, to that you control error messages.