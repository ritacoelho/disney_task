import './GlobalAsset.css';

function GlobalAsset(props) {
    return (
        <div className='asset-container'>
            <img className="asset-icon" src={props.icon}/> 
            <p className="asset-name">{props.name}</p>
            <p className="asset-reach">{props.reach}</p>
            <p className="asset-desc">{props.desc}</p>
        </div>
       
    )
}

export default GlobalAsset;