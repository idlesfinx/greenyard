import React from 'react';

const ContactForm: React.FC = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#39FF14]/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="glass rounded-[40px] p-8 md:p-12 border border-white/5 shadow-2xl">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                            GET IN TOUCH
                        </h2>
                        <p className="text-white/40 text-lg">
                            Have questions about our verified tech? We're here to help.
                        </p>
                    </div>

                    <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        className="space-y-6 max-w-2xl mx-auto"
                    >
                        <input type="hidden" name="form-name" value="contact" />

                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-bold uppercase text-white/60 tracking-wider ml-4">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#39FF14]/50 focus:bg-white/10 transition-all"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-bold uppercase text-white/60 tracking-wider ml-4">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#39FF14]/50 focus:bg-white/10 transition-all"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="mobile" className="text-xs font-bold uppercase text-white/60 tracking-wider ml-4">Mobile Number</label>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#39FF14]/50 focus:bg-white/10 transition-all"
                                placeholder="Enter your mobile number"
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-[#39FF14] text-black font-black text-lg py-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-[0_0_40px_-10px_rgba(57,255,20,0.3)]"
                            >
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
