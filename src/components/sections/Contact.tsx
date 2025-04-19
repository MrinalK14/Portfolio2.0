import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, ExternalLink, Copy } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `${label} has been copied to your clipboard.`,
    });
  };

  return (
    <section id="contact" className="min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary px-3 py-1 glass-card inline-block rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Interested in collaboration, consulting, or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* iPhone 15 Pro Container */}
          <div className="relative perspective-800">
            <div className="iphone-container relative" style={{ transform: "rotateY(-5deg)" }}>
              {/* iPhone Frame */}
              <div className="iphone-frame relative bg-gradient-to-b from-zinc-800 to-zinc-900 w-[320px] h-[650px] rounded-[50px] p-[12px] shadow-2xl shadow-zinc-900/40 border border-zinc-700/30">
                {/* Power Button */}
                <div className="absolute right-[-3px] top-[120px] h-[80px] w-[5px] bg-zinc-700 rounded-l-sm"></div>
                
                {/* Volume Buttons */}
                <div className="absolute left-[-3px] top-[100px] h-[40px] w-[5px] bg-zinc-700 rounded-r-sm"></div>
                <div className="absolute left-[-3px] top-[150px] h-[80px] w-[5px] bg-zinc-700 rounded-r-sm"></div>
                
                {/* Action Button */}
                <div className="absolute left-[-3px] top-[60px] h-[30px] w-[8px] bg-zinc-700 rounded-r-sm shadow-sm shadow-black/40"></div>
                
                {/* Screen Bezel */}
                <div className="absolute inset-[12px] rounded-[40px] overflow-hidden bg-black border-[3px] border-zinc-950">
                  {/* Dynamic Island */}
                  <div className="absolute top-[12px] left-1/2 transform -translate-x-1/2 w-[125px] h-[35px] bg-black rounded-full z-20 flex items-center justify-center">
                    <div className="absolute left-[28%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-[#111] rounded-full flex items-center justify-center">
                      <div className="w-[6px] h-[6px] bg-[#222] rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Screen Content */}
                  <div className="relative h-full w-full bg-gradient-to-b from-zinc-900 to-black">
                    {/* Contact App */}
                    <div className="absolute inset-0 pt-[60px] pb-[24px] flex flex-col">
                      {/* App Header */}
                      <div className="px-6 py-4 text-center border-b border-zinc-800/80 bg-zinc-900/30 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold text-white">Contact Me</h3>
                      </div>
                      
                      {/* App Content */}
                      <div className="flex-1 overflow-auto scrollbar-hide px-5 py-6 flex flex-col">
                        <div className="mb-6 px-5 py-4 bg-zinc-800/30 rounded-xl border border-zinc-700/20 text-center">
                          <p className="text-sm text-zinc-300 leading-relaxed">
                            Connect with me through any of these channels
                          </p>
                        </div>
                        
                        {/* Email Option */}
                        <a
                          href="mailto:mrinalkapoor24@gmail.com"
                          className="mb-5 block"
                        >
                          <div className="bg-gradient-to-br from-[#83C9F4]/20 to-[#83C9F4]/5 p-6 rounded-2xl border border-[#83C9F4]/20 shadow-lg flex flex-col items-center gap-4 active:scale-[0.98] transition-all">
                            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-full">
                              <Mail className="h-8 w-8 text-white" />
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-semibold text-white mb-1.5">Email Me</p>
                              <p className="text-xs text-zinc-400">mrinalkapoor24@gmail.com</p>
                              <button 
                                onClick={(e) => {
                                  e.preventDefault();
                                  copyToClipboard("mrinalkapoor24@gmail.com", "Email");
                                }}
                                className="mt-2 px-3 py-1 bg-zinc-800/80 rounded-full text-xs text-zinc-300 flex items-center mx-auto gap-1.5"
                              >
                                <Copy className="h-3 w-3" />
                                <span>Copy</span>
                              </button>
                            </div>
                          </div>
                        </a>
                        
                        {/* Social Options */}
                        <div className="grid grid-cols-2 gap-4">
                          <a
                            href="https://linkedin.com/in/mrinal-kapoor-462794230"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <div className="bg-gradient-to-br from-[#0A66C2]/20 to-[#0A66C2]/5 p-5 rounded-2xl border border-[#0A66C2]/20 shadow-lg flex flex-col items-center gap-3 h-full active:scale-[0.98] transition-all">
                              <div className="bg-[#0A66C2] p-2.5 rounded-full">
                                <Linkedin className="h-6 w-6 text-white" />
                              </div>
                              <div className="text-center">
                                <p className="text-sm font-medium text-white">LinkedIn</p>
                                <p className="text-[10px] text-zinc-400 mt-1">Professional Profile</p>
                              </div>
                            </div>
                          </a>
                          
                          <a
                            href="https://github.com/MrinalK14"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <div className="bg-gradient-to-br from-zinc-700/20 to-zinc-700/5 p-5 rounded-2xl border border-zinc-700/20 shadow-lg flex flex-col items-center gap-3 h-full active:scale-[0.98] transition-all">
                              <div className="bg-zinc-800 p-2.5 rounded-full">
                                <Github className="h-6 w-6 text-white" />
                              </div>
                              <div className="text-center">
                                <p className="text-sm font-medium text-white">GitHub</p>
                                <p className="text-[10px] text-zinc-400 mt-1">Code Repositories</p>
                              </div>
                            </div>
                          </a>
                        </div>

                        {/* Contact Card */}
                        <div className="mt-6 p-5 bg-zinc-800/20 border border-zinc-700/20 rounded-2xl">
                          <div className="flex flex-col gap-3">
                            <h4 className="text-xs uppercase text-zinc-500 font-medium">Location</h4>
                            <p className="text-sm text-zinc-300">India</p>
                            
                            <h4 className="text-xs uppercase text-zinc-500 font-medium mt-2">Response Time</h4>
                            <p className="text-sm text-zinc-300">Usually within 24-48 hours</p>

                            <h4 className="text-xs uppercase text-zinc-500 font-medium mt-2">Status</h4>
                            <div className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-green-500"></span>
                              <p className="text-sm text-zinc-300">Open to opportunities</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-[12px] left-1/2 transform -translate-x-1/2 w-[120px] h-[5px] bg-white/80 rounded-full"></div>
                
                {/* Phone Shine & Reflections */}
                <div className="absolute inset-0 rounded-[50px] overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/5"></div>
                  <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/10 to-transparent"></div>
                </div>
              </div>
              
              {/* Phone Shadow */}
              <div className="absolute -bottom-6 left-[10%] right-[10%] h-[30px] bg-black/30 blur-xl rounded-full"></div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:max-w-sm">
            <h3 className="text-2xl font-bold mb-4">Why Connect?</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>Whether you have a project in mind, want to discuss collaboration opportunities, or just want to say hello, I'm always interested in connecting with like-minded professionals.</p>
              <p>My areas of expertise include web development, AI/ML solutions, and software engineering. I'm particularly interested in projects involving innovative technologies and creative problem-solving.</p>
              <p>I look forward to hearing from you!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
