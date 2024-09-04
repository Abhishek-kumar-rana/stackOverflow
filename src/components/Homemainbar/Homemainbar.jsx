import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Questionlist from './Questionlist';
import { fetchallquestion } from '../../action/question';
import Hero from './Hero';
import './Homemainbar.css';

function Homemainbar() {
    const user = useSelector((state) => state.currentuserreducer);
    const location = useLocation();
    const navigate = useNavigate();
    const questionlist = useSelector((state) => state.questionreducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchallquestion());
    }, [dispatch]);

    const checkauth = () => {
        if (user === null) {
            alert("Login or signup to ask a question.");
            navigate("/Auth");
        } else {
            navigate('/Askquestion');
        }
    };

    // Animation Variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } },
    };

    const slideUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    return (
        <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="main-container"
        >
            
            {location.pathname === '/' ?<Hero />  : ''}
            <motion.div
                className="main-bar"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="main-bar-header" variants={slideUp}>
                    <h1>{location.pathname === '/' ? 'Top Questions' : 'All Questions'}</h1>
                    <motion.button
                        className="ask-btn"
                        onClick={checkauth}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        Ask Questions
                    </motion.button>
                </motion.div>
                <motion.div variants={staggerContainer}>
                    {questionlist === null || questionlist.data === undefined ? (
                        <motion.h1 variants={fadeIn}>Loading...</motion.h1>
                    ) : (
                        <>
                            <motion.p variants={fadeIn}>
                                {questionlist.data?.length} Questions
                            </motion.p>
                            <Questionlist questionlist={questionlist.data} />
                        </>
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Homemainbar;
