'use client'
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


const RegisterPage = () => {
  // State variables for password visibility, form fields, and error messages
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const togglePasswordVisibility = ({ field }: { field: string }) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    validatePassword(value);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    validateConfirmPassword(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    validateEmail(value);
  };

  const validatePassword = (value: string) => {
    if (value.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    }
    // Password must contain at least one uppercase letter, one lowercase letter, and one number and one special character
    else if (!value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)) {
      setPasswordError("Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.");
    }
    else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = (value: string) => {
    if (value !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email address.");
    } else {
      setEmailError("");
    }
  };

  const isFormValid = () => {
    return !passwordError && !confirmPasswordError && !emailError;
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create your account</CardTitle>
        <CardDescription className="text-xs">
          Already have an account?
          <Link href="/auth/login" className=" text-purple-800 font-bold">
            {" "}
            Login here
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input name="name" id="name" type="text" placeholder="John Doe" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="abc@gmail.com"
                onChange={(e) => handleEmailChange(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  name="password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="*******"
                  onChange={(e) => handlePasswordChange(e.target.value)}
                />
                <div
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() =>
                    togglePasswordVisibility({ field: "password" })
                  }
                >
                  {showPassword ? <HiEye /> : <HiEyeOff />}
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  name="confirmPassword"
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="*******"
                  onChange={(e) => handleConfirmPasswordChange(e.target.value)}
                />
                <div
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() =>
                    togglePasswordVisibility({ field: "confirmPassword" })
                  }
                >
                  {showConfirmPassword ? <HiEye /> : <HiEyeOff />}
                </div>
              </div>
             
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col justify-evenly gap-2">
        <Button variant="default" className="w-full" disabled={!isFormValid()}>
          Register
        </Button>

        {/* Display errors in the Alert component */}
        {passwordError || confirmPasswordError || emailError ? (
          <Alert variant="destructive" className="mt-4">
            <AlertTitle>Error</AlertTitle>
            {passwordError && (
              <AlertDescription>{passwordError}</AlertDescription>
            )}
            {confirmPasswordError && (
              <AlertDescription>{confirmPasswordError}</AlertDescription>
            )}
            {emailError && <AlertDescription>{emailError}</AlertDescription>}
          </Alert>
        ) : null}
      </CardFooter>
    </Card>
  );
};

// Export the RegisterPage component as the default export
export default RegisterPage;
