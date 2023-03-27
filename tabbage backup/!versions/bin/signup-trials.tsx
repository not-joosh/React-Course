    // return (
    //     <div className = "signup-wrapper">
    //         {isErrorModalOpen && (
    //             <Modal closeModal={() => setIsErrorModalOpen(false)} errorMessage={errorMessage}>

    //             </Modal>
    //         )}
    //         <div className = "signup-form-box">
    //             <form className = "signup-form" onSubmit= {handleSubmit(doSignUp)}> 
    //                 <div className = "signup-input-group">
    //                     <input className = "signup-name-field" type = "text" placeholder="Full Name..." {...register("fullName")}/>
    //                     {/* <p style={{color: "red"}}>{errors.fullName?.message}</p> */}
    //                     <input className = "signup-username-field" type="text" placeholder="Username..." {...register("userName")}/> 
    //                     {/* <p style={{color: "red"}}>{errors.userName?.message}</p> */}
    //                     <input className  = "signup-email-field" type= "email" placeholder = "Email..." {...register("email")}/>
    //                     {/* <p style={{color: "red"}}>{errors.email?.message}</p> */}
    //                     <input className  = "signup-password-field" type= "password" placeholder = "Password..." {...register("password")}/>
    //                     {/* <p style={{color: "red"}}>{errors.password?.message}</p> */}
    //                     <input className  = "signup-confirm-field" type= "password" placeholder = "Confirm Password..." {...register("confirmPassword")}/>
    //                     {/* <p style={{color: "red"}}>{errors.confirmPassword?.message}</p> */}
    //                 </div>
    //                 <div className  = "signup-options-group">
    //                     <input className  = "signup-delivery" type="radio" value="driver" {...register("accountType")} />
    //                     <label className  = "signup-deliverytext" >Tabbage Delivery</label><br/>
    //                     <input className  = "signup-business" type="radio" value="merchant" {...register("accountType")}/>
    //                     <label className  = "signup-businesstext" >Business/Merchant</label><br/>
    //                     <input className  = "signup-personal" type="radio" value="customer" {...register("accountType")}/>
    //                     <label className  = "signup-personaltext" >Personal Use</label><br/> 
    //                     {/* <p style={{color: "red"}}>{errors.accountType?.message}</p>   */}
    //                 </div>
    //                 <input className  = "signup-create-btn" type = "submit" value = "Create Account"/>
    //             </form>
    //         </div>
    //         <img src = { ReturnButton } className ="signup-Return-btn" onClick={() => navigate("/Login")}/>
    //     </div>
    // )



















    
    // return (
    //     <div className="signup-wrapper">
    //       {isErrorModalOpen && (
    //         <Modal closeModal={() => setIsErrorModalOpen(false)} errorMessage={errorMessage}>

    //         </Modal>
    //       )}
    //       <div className="signup-form-box">
    //         <form className="signup-form" onSubmit={handleSubmit(doSignUp)}>
    //           <div className="signup-input-group">
    //             <input className="signup-name-field" type="text" placeholder="Full Name..." {...register("fullName")}/>
    //             <input className="signup-username-field" type="text" placeholder="Username..." {...register("userName")} />
    //             <input className="signup-email-field" type="email" placeholder="Email..." {...register("email")} />
    //             <input
    //               className="signup-password-field"
    //               type="password"
    //               placeholder="Password..."
    //               {...register("password")}
    //             />
    //             <input
    //               className="signup-confirm-field"
    //               type="password"
    //               placeholder="Confirm Password..."
    //               {...register("confirmPassword")}
    //             />
    //           </div>
    //           <div className="signup-options-group">
    //             <input
    //               className="signup-delivery"
    //               type="radio"
    //               value="driver"
    //               {...register("accountType")}
    //             />
    //             <label className="signup-deliverytext">Tabbage Delivery</label>
    //             <br />
    //             <input
    //               className="signup-business"
    //               type="radio"
    //               value="merchant"
    //               {...register("accountType")}
    //             />
    //             <label className="signup-businesstext">Business/Merchant</label>
    //             <br />
    //             <input
    //               className="signup-personal"
    //               type="radio"
    //               value="customer"
    //               {...register("accountType")}
    //             />
    //             <label className="signup-personaltext">Personal Use</label>
    //             <br />
    //           </div>
    //           <input
    //             className="signup-create-btn"
    //             type="submit"
    //             value="Create Account"
    //           />
    //         </form>
    //       </div>
    //       <img
    //         src={ReturnButton}
    //         className="signup-Return-btn"
    //         onClick={() => navigate("/Login")}
    //       />
    //     </div>
    // )