import { createUserWithEmailAndPassword } from "firebase/auth"
import auth from "../Firebase/Firebase.config";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const Registar = () => {
    const [register, setRegister] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accept = e.target.check.checked;
        if (password.length < 5) {
            setRegister('password at least 6 number or longer')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegister('your password need at least 1 laege charcter')
            return;
        }
        else if(!accept){
            setRegister('please accept our term and condition')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('user created successfully');
            })
            .catch(error => {
                console.log(error)
                setSuccess('user already sign in');
            })
    }
    return (
        <div className="mx-auto md:w-1/2">
            <h1 className="text-3xl mb-4">Registar Now</h1>
            <form onSubmit={handleSubmit} >
                <input required className=" px-2 py-2 mb-4 w-full border" type="email" name="email" id="" />
                <div className="relative">
                    <input required
                        className=" px-2 py-2 mb-4  border w-full"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="" />
                    <span className="absolute top-3 right-3" onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <AiFillEye /> : <AiFillEyeInvisible />
                        }
                    </span>
                </div>
                <div className="flex items-center justify-center gap-3 mb-2">
                    <input type="checkbox" name="check" id="" />
                    <span> Please accept our terms and condition</span>
                </div>
                <input className="btn btn-primary w-full" type="submit" value="Registar" />

            </form>
            {
                register && <p>{register}</p>
            }
            {
                success && <p>{success}</p>
            }
        </div>
    );
};

export default Registar;