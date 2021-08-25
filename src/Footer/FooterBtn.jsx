import './FooterBtn.css';

function FooterBtn ({text}) {
    return (
        <>
            <button className="footer-btn">
                {text}
            </button>
        </>
    )
}

export default FooterBtn;