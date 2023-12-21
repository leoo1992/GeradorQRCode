/* eslint-disable react/prop-types */
import { useRef, useEffect } from 'react';
import { Toast } from 'primereact/toast';
import { useSpring, animated, config } from 'react-spring';
import { FaArrowUp } from 'react-icons/fa';

const CustomToast = ({ showToast }) => {
  const toastRef = useRef(null);

  const animatedProps = useSpring({
    to: async (next) => {
      let loop = true;
      while (loop) {
        await next({ opacity: 0, transform: 'translateY(50px)' });
        await next({ opacity: 1, transform: 'translateY(0)' });
        setTimeout(() => {
          loop = false;
        }, 3000);
      }
    },
    from: { opacity: 0, transform: 'translateY(-50px)' },
    config: { ...config.default },
  });

  useEffect(() => {
    if (showToast && toastRef.current) {
      toastRef.current.show({
        severity: 'info',
        summary: 'Download Completo',
        life: 3000,
        className: 'bg-purple-600 text-cyan-100 fw-bold rounded-5 shadow-sm border-3',
        style: { fontFamily: 'Alkatra', width: '250px' },
        icon: (
          <animated.div style={animatedProps}>
            <FaArrowUp />
          </animated.div>
        ),
      });
    }
  }, [showToast, toastRef, animatedProps]);

  return <Toast ref={toastRef} position="top-right" />;
};

export default CustomToast;
