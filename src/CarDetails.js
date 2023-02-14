import  {useRef, useEffect} from "react"

export function CarDetails(initialData){
    let model = useRef("");
    let color = useRef("");
    let year= useRef("");


useEffect(()=>{
    model.current.value = initialData.model;
    color.current.value = initialData.color;
    year.current.value = initialData.year;
}, [initialData])

return(
    <div>
        <form>
            <input ref={model} name="model" type="text" placeholder="model"/>
            <input ref={color} name="color"placeholder="color" type="text"/>
            <input ref={year} name="year"placeholder="year" color="text"/>
        </form>
    </div>
)
}