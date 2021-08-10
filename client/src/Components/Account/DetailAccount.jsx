import { React, useEffect } from 'react'
import { getDateUser } from '../../Redux/Actions/Home';
import { connect, useDispatch } from 'react-redux';

function DetailAccount(props) {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getDateUser())

    // }, [])


    return (
        <div >
            <div >


                {props.user !== undefined ?
                    <div >

                        <div >
                        <img className="image" src={props.user.account_data.photo} width="350" height="150" alt="" />
                            
                            <div ><p>Full Name:</p><p>{props.user.user_data.fullname}</p></div>
                            <div ><p>E-mail:</p><p>{props.user.account_data.mail}</p></div>
                            <div ><p>Identification Number:</p><p>{props.user.user_data.dni}</p></div>
                            <div ><p>CVU:</p><p>{props.user.account_data.cvu}</p></div>
                            <div ><p>Birth Date:</p><p>{props.user.user_data.birth}</p></div>
                            <div ><p>Address:</p><p>{props.user.user_data.ubicacion }</p></div>
                            <div ><p>Cards:</p><p>{props.user.account_data.cards.length }</p></div>
                            <div ><p> Change Password:</p><p></p></div>
                        </div>
                    </div>
                    : <div> 
                        {console.log(props.user)}
                        <h1>Loading</h1>
                        <img src="" alt="LoadingGif" className='loadingGif' />
                    </div>}

            </div>
        </div>

    )
}

function mapStateToProps(state) {
    return {
        user: state.homeReducer.User,

    };
}

// function mapDispatchToProps(dispatch) {
//     return {
//         getDateUser: user => dispatch(getDateUser(user)),

//     };
// }

export default connect(
    mapStateToProps,
    null
)(DetailAccount);

// export default DetailAccount
