import React from "react";

type ModalProps = {
    closeModal: () => void;
    children: React.ReactNode;
    errorMessage?: string; 
};
export const Modal = ({ closeModal, children, errorMessage }: ModalProps) => {
    return (
        <div className = "modal-overlay" onClick={closeModal}>
            <div className="modal" >
                <button onClick={closeModal} className = "modal-close-btn">&#9747;</button>
                <div className = "modal-content">
                <h1 className = "modal-prompt">ISSUE HAS OCCURRED</h1>
                    {children}
                    {errorMessage && (
                        <div className = "modal-error" dangerouslySetInnerHTML={{ __html: errorMessage }}/>
                    )}
                </div>
            </div>
        </div>
    );
};