open canopy
open runner
open System

canopy.configuration.compareTimeout <- 3.0
canopy.configuration.elementTimeout <- 3.0
canopy.configuration.failFast := true

start chrome

let local = "localhost"
let port = "53196"
let prefix = "http://"

let root = prefix + local + ":" + port

"search page has a textbox, scope selector and submit button" &&& fun _ ->
    url root
    displayed "#search-box"
    displayed "#scope"
    displayed "#submit"
run()

printfn "press [enter] to exit"
System.Console.ReadLine() |> ignore

quit()