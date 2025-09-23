import '../Styles/AllStyles.css'

export default function Card({image , title}){
    return <div className='card'>
        <img src={image} alt="" />
        <label>{title}</label>
    </div>
}