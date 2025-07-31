'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useLanguage } from '@/context/LanguageContext';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import emailjs from '@emailjs/browser';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useLanguage();
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // EmailJS Configuration - Add your credentials here
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  // Initialize EmailJS
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      console.log('EmailJS initialized with public key');
    }
  }, [EMAILJS_PUBLIC_KEY]);

  // Debug function to log environment variables (only in development)
  const debugEmailJSConfig = () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('EmailJS Configuration Debug:');
      console.log('Service ID:', EMAILJS_SERVICE_ID ? 'SET' : 'NOT SET');
      console.log('Template ID:', EMAILJS_TEMPLATE_ID ? 'SET' : 'NOT SET');
      console.log('Public Key:', EMAILJS_PUBLIC_KEY ? 'SET' : 'NOT SET');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    // Debug configuration
    debugEmailJSConfig();

    // Check if environment variables are properly set
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      console.error('EmailJS credentials not properly configured. Please check your .env.local file.');
      setMessage('Configuration error: EmailJS credentials not set. Please check environment variables.');
      setIsLoading(false);
      return;
    }

    try {
      if (form.current && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        console.log('Attempting to send email with EmailJS...');
        
        const result = await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          form.current,
          EMAILJS_PUBLIC_KEY
        );
        
        console.log('EmailJS Result:', result);
        
        if (result.text === 'OK') {
          console.log('Email sent successfully!');
          setMessage(t('contact.form.success'));
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          // Auto close after 3 seconds to allow user to see success message
          setTimeout(() => {
            onClose();
            setMessage('');
          }, 3000);
        } else {
          console.error('EmailJS returned unexpected result:', result);
          setMessage(`Email sending failed: ${result.text}`);
        }
      }
    } catch (error: unknown) {
      const errorObj = error as { status?: number; text?: string; message?: string };
      console.error('EmailJS Error Details:', {
        error,
        message: errorObj?.message,
        status: errorObj?.status,
        text: errorObj?.text
      });
      
      // More detailed error messages
      let errorMessage = t('contact.form.error');
      if (errorObj?.status) {
        switch (errorObj.status) {
          case 400:
            errorMessage = 'Bad Request: Please check your form data.';
            break;
          case 401:
            errorMessage = 'Unauthorized: Please check your EmailJS credentials.';
            break;
          case 403:
            errorMessage = 'Forbidden: EmailJS service access denied.';
            break;
          case 404:
            errorMessage = 'Not Found: EmailJS service or template not found.';
            break;
          case 422:
            errorMessage = 'The recipients address is empty. Make sure the recipient email is set in the EmailJS template settings, NOT as a form field. Contact admin to configure: Fsaetec.mty@outlook.com';
            break;
          case 429:
            errorMessage = 'Rate Limited: Too many requests. Please try again later.';
            break;
          default:
            errorMessage = `Email service error (${errorObj.status}): ${errorObj.text || errorObj.message}`;
        }
      } else if (errorObj?.message) {
        errorMessage = `Error: ${errorObj.message}`;
      }
      
      setMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] bg-gray-900 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light text-white mb-2">
            {t('contact.modal.title')}
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-base">
            {t('contact.modal.description')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-red-500 mb-4">
              {t('contact.info.title')}
            </h3>
            
            {/* Email */}
            <div className="flex items-start space-x-3">
              <div className="bg-red-600/20 p-2 rounded-lg">
                <MdEmail className="text-red-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">{t('contact.info.email')}</p>
                <a 
                  href="mailto:fsaetec.mty@outlook.com"
                  className="text-white hover:text-red-400 transition-colors duration-200 font-medium"
                >
                  fsaetec.mty@outlook.com
                </a>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-start space-x-3">
              <div className="bg-red-600/20 p-2 rounded-lg">
                <MdPhone className="text-red-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">{t('contact.info.phone')}</p>
                <a 
                  href="tel:+528661425689"
                  className="text-white hover:text-red-400 transition-colors duration-200 font-medium"
                >
                  +52 866 142 5689
                </a>
              </div>
            </div>
            
            {/* Location */}
            <div className="flex items-start space-x-3">
              <div className="bg-red-600/20 p-2 rounded-lg">
                <MdLocationOn className="text-red-500 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">{t('contact.info.location')}</p>
                <p className="text-white font-medium">Tecnológico de Monterrey</p>
                <p className="text-gray-300 text-sm">Campus Monterrey</p>
              </div>
            </div>
            
            {/* Response Time */}
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
              <p className="text-gray-300 text-sm text-center">
                {t('contact.info.response')}
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-200">
                  {t('contact.form.name')}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:ring-red-500 focus:border-red-500"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-200">
                  {t('contact.form.email')}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:ring-red-500 focus:border-red-500"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-200">
                  {t('contact.form.subject')}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:ring-red-500 focus:border-red-500"
                  placeholder={t('contact.form.subjectPlaceholder')}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-200">
                  {t('contact.form.message')}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={4}
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:ring-red-500 focus:border-red-500 resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              {/* Message Display */}
              {message && (
                <div className={`p-3 rounded-lg text-sm text-center ${
                  message.includes('success') || message.includes('enviado') 
                    ? 'bg-green-900/30 text-green-400 border border-green-500/30' 
                    : 'bg-red-900/30 text-red-400 border border-red-500/30'
                }`}>
                  {message}
                </div>
              )}
              
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={onClose}
                  disabled={isLoading}
                  className="flex-1 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  {t('contact.form.cancel')}
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white disabled:opacity-50"
                >
                  {isLoading ? t('contact.form.sending') : t('contact.form.send')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
