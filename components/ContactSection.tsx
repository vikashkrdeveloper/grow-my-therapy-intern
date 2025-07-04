import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
    preferredTime: "",
    agreeToContact: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "This field is required";
    if (!formData.phone.trim()) newErrors.phone = "This field is required";
    if (!formData.email.trim()) {
      newErrors.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.reason.trim()) newErrors.reason = "This field is required";
    if (!formData.preferredTime.trim())
      newErrors.preferredTime = "This field is required";
    if (!formData.agreeToContact)
      newErrors.agreeToContact = "You must agree to be contacted";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      toast({
        title: "Form submitted successfully!",
        description: "Dr. Blake will contact you within 24 hours.",
      });
      setSubmitted(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        reason: "",
        preferredTime: "",
        agreeToContact: false,
      });

      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#f7f6f2] to-[#ebe8dd] py-24 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Ready to Begin Your Journey?</h2>
          <div className="text-gray-600 text-lg space-y-1">
            <p>📍 1287 Maplewood Drive, Los Angeles, CA 90026</p>
            <p>📞 (323) 555-0192</p>
            <p>✉️ serena@blakepsychology.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-10 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="text-gray-700">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="mt-2"
                placeholder="Your full name"
              />
              {errors.name && <p className="text-red-500 text-sm italic mt-1">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="phone" className="text-gray-700">Phone *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="mt-2"
                placeholder="Your phone number"
              />
              {errors.phone && <p className="text-red-500 text-sm italic mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-gray-700">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="mt-2"
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm italic mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="reason" className="text-gray-700">What brings you here? *</Label>
            <Textarea
              id="reason"
              value={formData.reason}
              onChange={(e) => handleInputChange("reason", e.target.value)}
              className="mt-2 min-h-[120px]"
              placeholder="Share what's on your mind..."
            />
            {errors.reason && <p className="text-red-500 text-sm italic mt-1">{errors.reason}</p>}
          </div>

          <div>
            <Label htmlFor="preferredTime" className="text-gray-700">Preferred time to reach you *</Label>
            <Input
              id="preferredTime"
              value={formData.preferredTime}
              onChange={(e) => handleInputChange("preferredTime", e.target.value)}
              className="mt-2"
              placeholder="e.g., Weekday mornings, evenings, etc."
            />
            {errors.preferredTime && <p className="text-red-500 text-sm italic mt-1">{errors.preferredTime}</p>}
          </div>

          <div className="flex items-center space-x-3 mt-4">
            <Checkbox
              id="agree"
              checked={formData.agreeToContact}
              onCheckedChange={(checked) => handleInputChange("agreeToContact", checked as boolean)}
              className="border-gray-300"
            />
            <Label htmlFor="agree" className="text-gray-700">
              I agree to be contacted *
            </Label>
          </div>
          {errors.agreeToContact && <p className="text-red-500 text-sm italic">{errors.agreeToContact}</p>}

          <div className="pt-6">
            <Button
              type="submit"
              className="w-full bg-gray-800 text-white hover:bg-gray-700 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Send Message
            </Button>
            {submitted && (
              <p className="text-green-600 text-center font-medium mt-4">
                ✅ Thank you! Dr. Blake will reach out soon.
              </p>
            )}
          </div>
        </form>

        <div className="text-center mt-20 grid md:grid-cols-2 gap-12 text-gray-700">
          <div>
            <h4 className="font-serif text-xl text-gray-900 mb-2">Session Fees</h4>
            <p className="text-lg">Individual: $200 / session</p>
            <p className="text-lg">Couples: $240 / session</p>
          </div>
          <div>
            <h4 className="font-serif text-xl text-gray-900 mb-2">Office Hours</h4>
            <p className="text-lg">In-Person: Tue & Thu, 10 AM–6 PM</p>
            <p className="text-lg">Virtual: Mon, Wed & Fri, 1 PM–5 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
