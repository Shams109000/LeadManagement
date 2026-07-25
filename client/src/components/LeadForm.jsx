import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../services/api";
import { toast } from "react-toastify";
const LeadForm = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);
        setSuccess("");

        try {
            const res = await api.post("/leads", data);

            if (res.status === 201 || res.status === 200) {
                toast.success("🎉 Lead submitted successfully!");
                reset();
            }
        } catch (err) {
            alert(
                err.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-lg">
            <h2 className="mb-2 text-3xl font-bold text-gray-800">
                Get In Touch
            </h2>

            <p className="mb-8 text-gray-500">
                Fill out the form and we'll contact you soon.
            </p>

            {success && (
                <div className="mb-6 rounded-lg bg-green-100 p-4 text-green-700">
                    {success}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                {/* Name */}

                <div>
                    <label className="mb-2 block font-medium">
                        Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
                        {...register("name", {
                            required: "Name is required",
                        })}
                    />

                    {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Email */}

                <div>
                    <label className="mb-2 block font-medium">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value:
                                    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                message: "Invalid email",
                            },
                        })}
                    />

                    {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Budget */}

                <div>
                    <label className="mb-2 block font-medium">
                        Budget Range
                    </label>

                    <select
                        className="w-full rounded-lg border p-3"
                        {...register("budget", {
                            required: "Select budget",
                        })}
                    >
                        <option value="">Select Budget</option>

                        <option value="Below ₹10,000">
                            Below ₹10,000
                        </option>

                        <option value="₹10,000 - ₹50,000">
                            ₹10,000 - ₹50,000
                        </option>

                        <option value="₹50,000 - ₹1,00,000">
                            ₹50,000 - ₹1,00,000
                        </option>

                        <option value="Above ₹1,00,000">
                            Above ₹1,00,000
                        </option>
                    </select>

                    {errors.budget && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.budget.message}
                        </p>
                    )}
                </div>

                {/* Message */}

                <div>
                    <label className="mb-2 block font-medium">
                        Message
                    </label>

                    <textarea
                        rows="5"
                        placeholder="Tell us about your project..."
                        className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
                        {...register("message", {
                            required: "Message is required",
                            minLength: {
                                value: 10,
                                message: "Minimum 10 characters",
                            },
                        })}
                    />

                    {errors.message && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                <button
                    disabled={loading}
                    className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                    {loading ? "Submitting..." : "Submit Lead"}
                </button>

            </form>
        </section>
    );
};

export default LeadForm;