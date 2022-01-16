import './Modal.css'

export default function Modal(props) {
    let {isOpen, handleChange, content} = props
    const closeModal = _ => handleChange(!isOpen)
    return (
        <>
        {
            isOpen && (
                <aside className='background-Modal'>
                    <div className='container-Modal'>
                        <button className="button-Modal" onClick={closeModal}>&#x2715;</button>
                        <h3>{content}</h3>
                    </div>
                </aside>

            )
        }
        </>
    )
}
