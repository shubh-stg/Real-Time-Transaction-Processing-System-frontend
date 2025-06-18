import React from "react";
import { ArrowRight, Send, Users, Shield, Database,ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleLoginSubmit = () => {
    navigate("/login");
  };
  const handleRegisterSubmit = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Navbar */}
      <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="w-full px-8 lg:px-16">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Left - Logo + Name */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Send className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <span className="text-2xl lg:text-3xl font-bold text-white">
                MoneyFlow
              </span>
            </div>

            {/* Right - Buttons */}
            <div className="flex items-center space-x-4">
              <button
                className="text-white hover:text-blue-300 transition-colors text-lg"
                onClick={handleLoginSubmit}
              >
                Login
              </button>
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 lg:px-8 lg:py-3 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all text-lg"
                onClick={handleRegisterSubmit}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 lg:pt-24 xl:pt-32 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 lg:mb-8 leading-tight">
            Simple Money Transfer
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              Made Easy
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
            Transfer money between accounts instantly. Built with modern
            technology for secure and reliable transactions.
          </p>
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 lg:px-12 lg:py-4 xl:px-16 xl:py-5 rounded-full text-lg lg:text-xl xl:text-2xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all flex items-center mx-auto"
            onClick={handleRegisterSubmit}
          >
            Get Started
            <ArrowRight className="ml-2 lg:ml-3 w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 lg:px-24 xl:px-32 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Key Features
            </h2>
            <p className="text-lg lg:text-xl text-gray-300">
              Everything you need for basic money transfer operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Money Transfer
              </h3>
              <p className="text-gray-300">
                Send money from one account to another with simple debit and
                credit operations.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                User Analytics
              </h3>
              <p className="text-gray-300">
                Personal dashboard with transaction history, analytics, and
                account management tools.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Admin Management
              </h3>
              <p className="text-gray-300">
                Administrative dashboard for user management, system analytics,
                and transaction oversight.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />{" "}
                {/* Updated icon */}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Secure Transactions
              </h3>{" "}
              {/* Updated heading */}
              <p className="text-gray-300">
                End-to-end encryption and JWT-based authentication to ensure
                your data and transactions remain safe and protected.
              </p>{" "}
              {/* Updated description */}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Real-time Processing
              </h3>
              <p className="text-gray-300">
                Efficient database operations with Kafka integration for
                reliable transaction processing.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                User Management
              </h3>
              <p className="text-gray-300">
                Complete user lifecycle management with role-based access and
                account controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              Simple steps to transfer money between accounts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8 text-white text-xl lg:text-3xl font-bold">
                1
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mb-3 lg:mb-4">
                Login to Account
              </h3>
              <p className="text-gray-300 text-base lg:text-lg xl:text-xl">
                Access your account through secure login
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8 text-white text-xl lg:text-3xl font-bold">
                2
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mb-3 lg:mb-4">
                Enter Details
              </h3>
              <p className="text-gray-300 text-base lg:text-lg xl:text-xl">
                Provide recipient details and transfer amount
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8 text-white text-xl lg:text-3xl font-bold">
                3
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-white mb-3 lg:mb-4">
                Transfer Complete
              </h3>
              <p className="text-gray-300 text-base lg:text-lg xl:text-xl">
                Money is transferred and balances are updated
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Description */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 lg:mb-8">
            Modern Money Transfer Solution
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-8 lg:mb-12 leading-relaxed max-w-4xl mx-auto">
            MoneyFlow provides a comprehensive platform for secure money
            transfers with dedicated analytics for users and powerful management
            tools for administrators. Experience seamless transactions with
            real-time processing and detailed insights.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 lg:space-x-4 mb-4 lg:mb-6">
            <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Send className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
            </div>
            <span className="text-2xl lg:text-4xl font-bold text-white">
              MoneyFlow
            </span>
          </div>
          <p className="text-gray-400 text-base lg:text-lg xl:text-xl">
            Money Transfer Application with Advanced Analytics
          </p>
        </div>
      </footer>
    </div>
  );
}
