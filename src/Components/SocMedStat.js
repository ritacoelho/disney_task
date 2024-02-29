import './SocMedStat.css';

function SocMedStat(props) {
    return (
        <div className='social-container'>
            <img className="social-icon" src={props.icon}/> 
            <div className='social-text'>
                <p className="social-reach">{props.reach}</p>
                <p className="social-desc">{props.desc}</p>
            </div>
        </div>
       
    )
}

export default SocMedStat;