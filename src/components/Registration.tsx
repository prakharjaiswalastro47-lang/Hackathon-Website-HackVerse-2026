import { useState, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Users, Mail, Phone, Building, Code2 } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

interface FormData {
  team_name: string;
  team_leader_name: string;
  email: string;
  phone: string;
  team_size: number;
  institution: string;
  experience_level: 'beginner' | 'intermediate' | 'advanced';
  project_idea: string;
}

interface FormErrors {
  [key: string]: string;
}

const initialState: FormData = {
  team_name: '',
  team_leader_name: '',
  email: '',
  phone: '',
  team_size: 2,
  institution: '',
  experience_level: 'beginner',
  project_idea: '',
};

export function Registration() {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [registrantCount, setRegistrantCount] = useState<number | null>(null);

  useEffect(() => {
    if (!isSupabaseConfigured) return;
    (async () => {
      try {
        const { count, error } = await supabase
          .from('registrations')
          .select('*', { count: 'exact', head: true });
        if (!error && count !== null) setRegistrantCount(count);
      } catch (e) {
        console.warn('Unable to query Supabase registrant count:', e);
      }
    })();
  }, [success]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.team_name.trim()) newErrors.team_name = 'Team name is required';
    else if (formData.team_name.trim().length < 2) newErrors.team_name = 'Team name is too short';

    if (!formData.team_leader_name.trim()) newErrors.team_leader_name = 'Leader name is required';
    else if (formData.team_leader_name.trim().length < 2) newErrors.team_leader_name = 'Name is too short';

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Enter a valid email address';

    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[\d\s()+\-]{7,}$/.test(formData.phone))
      newErrors.phone = 'Enter a valid phone number';

    if (formData.team_size < 1 || formData.team_size > 6)
      newErrors.team_size = 'Team size must be between 1 and 6';

    if (!formData.institution.trim()) newErrors.institution = 'Institution is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value, 10) : value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    setSubmitting(true);

    if (!isSupabaseConfigured) {
      // Demo submission mode when environment variables are missing on host
      setTimeout(() => {
        setSubmitting(false);
        setSuccess(true);
        setFormData(initialState);
        setTimeout(() => setSuccess(false), 6000);
      }, 800);
      return;
    }

    try {
      const { error } = await supabase.from('registrations').insert({
        team_name: formData.team_name.trim(),
        team_leader_name: formData.team_leader_name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        team_size: formData.team_size,
        institution: formData.institution.trim(),
        experience_level: formData.experience_level,
        project_idea: formData.project_idea.trim() || null,
      });

      setSubmitting(false);

      if (error) {
        setSubmitError(
          error.code === '23505'
            ? 'A team with this name or email has already registered.'
            : 'Something went wrong. Please try again.'
        );
        return;
      }

      setSuccess(true);
      setFormData(initialState);
      setTimeout(() => setSuccess(false), 6000);
    } catch (e) {
      setSubmitting(false);
      setSubmitError('Unable to connect to database. Please check Supabase configuration.');
    }
  };

  const fields = [
    {
      name: 'team_name',
      label: 'Team Name',
      type: 'text',
      icon: Users,
      placeholder: 'The Innovators',
    },
    {
      name: 'team_leader_name',
      label: 'Team Leader Name',
      type: 'text',
      icon: Users,
      placeholder: 'Jane Doe',
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      icon: Mail,
      placeholder: 'jane@example.com',
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      icon: Phone,
      placeholder: '+1 234 567 890',
    },
    {
      name: 'institution',
      label: 'Institution / Company',
      type: 'text',
      icon: Building,
      placeholder: 'MIT / Google / Self',
    },
  ];

  return (
    <section id="register" className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-10 animate-on-scroll">
          <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
            Join Us
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-gray-900 dark:text-white mt-3 mb-4">
            Register Your <span className="gradient-text">Team</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Secure your spot at HackVerse 2026. Limited seats available.
          </p>
          {registrantCount !== null && (
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30">
              <Users size={16} className="text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                {registrantCount} {registrantCount === 1 ? 'team has' : 'teams have'} registered
              </span>
            </div>
          )}
        </div>

        {/* Form card */}
        <div className="animate-on-scroll p-6 sm:p-10 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl">
          {success ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600 dark:text-green-400" size={48} />
              </div>
              <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-2">
                Registration Successful!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                We've received your registration. Check your email for further details
                and next steps. See you at HackVerse!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Text fields */}
              {fields.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    {field.label}
                  </label>
                  <div className="relative">
                    <field.icon
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={formData[field.name as keyof FormData] as string}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className={`form-input pl-10 ${errors[field.name] ? 'error' : ''}`}
                    />
                  </div>
                  {errors[field.name] && (
                    <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              {/* Team size */}
              <div>
                <label
                  htmlFor="team_size"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  Team Size (1-6 members)
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5, 6].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, team_size: size }))}
                      className={`w-12 h-12 rounded-xl font-semibold transition-all ${
                        formData.team_size === size
                          ? 'bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {errors.team_size && (
                  <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.team_size}
                  </p>
                )}
              </div>

              {/* Experience level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Experience Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['beginner', 'intermediate', 'advanced'] as const).map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, experience_level: level }))}
                      className={`px-4 py-3 rounded-xl text-sm font-medium capitalize transition-all ${
                        formData.experience_level === level
                          ? 'bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project idea */}
              <div>
                <label
                  htmlFor="project_idea"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  Project Idea <span className="text-gray-400">(optional)</span>
                </label>
                <div className="relative">
                  <Code2
                    size={18}
                    className="absolute left-3 top-3.5 text-gray-400"
                  />
                  <textarea
                    id="project_idea"
                    name="project_idea"
                    value={formData.project_idea}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Briefly describe what you'd like to build..."
                    className="form-input pl-10 resize-none"
                  />
                </div>
              </div>

              {/* Submit error */}
              {submitError && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 flex items-center gap-3 animate-fade-in">
                  <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                  <p className="text-sm text-red-700 dark:text-red-300">{submitError}</p>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/50 hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Register Team
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
