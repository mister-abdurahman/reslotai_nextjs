"use client";
import React, { useState } from "react";
import { Mail, MessageSquare, BarChart3, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const AutoHowItWorks = () => {
  const [activeExample, setActiveExample] = useState<number | null>(null);

  const features = [
    {
      icon: <Mail className="w-12 h-12 text-blue-600" />,
      title: "Automated Emails",
      description: "Send follow-ups with exclusive offers",
      detail:
        "Personalized recovery emails with service-specific discounts to bring customers back.",
      example: (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
          <div className="border-b pb-3 mb-4">
            <div className="text-sm text-gray-500">
              From: AutoCare Plus &lt;service@autocareplus.com&gt;
            </div>
            <div className="text-sm text-gray-500">
              To: sarah.johnson@email.com
            </div>
            <div className="font-semibold text-gray-800">
              Important: Your Vehicle`&apos;`s Safety Depends on This
            </div>
          </div>
          <div className="space-y-3 text-sm text-gray-700">
            <p>Hi Sarah,</p>
            <p>
              We noticed you had to reschedule your tire rotation appointment
              yesterday. We completely understand life gets busy!
            </p>
            <p>
              <strong>
                Here`&apos;`s why tire rotation is crucial for your safety:
              </strong>
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Prevents uneven tire wear that can cause blowouts</li>
              <li>Extends tire life by up to 30,000 miles</li>
              <li>Improves fuel efficiency and handling</li>
            </ul>
            <p>
              To make it easier, we`&apos;`re offering{" "}
              <span className="font-semibold text-green-600">$20 off</span> your
              tire rotation when you book within the next 7 days.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded p-3 text-center my-4">
              <Button className="bg-blue-600 text-white px-6 py-2 text-sm">
                Book Now - Save $20
              </Button>
            </div>
            <p className="text-xs text-gray-500">
              Your safety is our priority. Let`&apos;`s get those tires rotated!
            </p>
            <p className="text-xs text-gray-500">- Mike, Service Advisor</p>
          </div>
        </div>
      ),
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-green-600" />,
      title: "Smart SMS Recovery",
      description: "Remind and reschedule via text automatically",
      detail:
        "Intelligent text messaging that responds to customer needs and reschedules instantly.",
      example: (
        <div className="bg-gray-100 rounded-lg shadow-lg p-4 max-w-sm mx-auto">
          <div className="bg-white rounded-t-lg p-3 border-b">
            <div className="text-xs text-gray-500 text-center">Messages</div>
            <div className="text-sm font-semibold text-center">
              Downtown Auto Service
            </div>
          </div>
          <div className="bg-white rounded-b-lg p-3 space-y-3 h-80 overflow-y-auto">
            <div className="flex">
              <div className="bg-gray-200 rounded-lg p-2 max-w-xs text-sm">
                Hi Tom! We saw you missed your transmission service today. No
                worries - these things happen!
              </div>
            </div>
            <div className="flex">
              <div className="bg-gray-200 rounded-lg p-2 max-w-xs text-sm">
                Did you know transmission service prevents costly repairs? It
                removes old fluid that can damage your transmission, potentially
                saving you $3,000+ in repairs.
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white rounded-lg p-2 max-w-xs text-sm">
                I didn`&apos;`t know that! When can I come in?
              </div>
            </div>
            <div className="flex">
              <div className="bg-gray-200 rounded-lg p-2 max-w-xs text-sm">
                Great question! We have slots tomorrow at 10AM or 2PM. Which
                works better for you?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white rounded-lg p-2 max-w-xs text-sm">
                2PM works perfect
              </div>
            </div>
            <div className="flex">
              <div className="bg-gray-200 rounded-lg p-2 max-w-xs text-sm">
                Perfect! ✅ You`&apos;`re booked for tomorrow at 2PM.
                We`&apos;`ll send a reminder. Thanks for taking care of your
                vehicle!
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
      title: "AI-Driven Insights",
      description: "Learn why customers cancel and when they rebook",
      detail:
        "Track patterns and optimize your service offerings based on real customer behavior.",
      example: (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
          <div className="text-center mb-4">
            <h4 className="font-semibold text-gray-800 text-lg">
              Service Insights Dashboard
            </h4>
            <p className="text-sm text-gray-600">Last 30 Days</p>
          </div>
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h5 className="font-semibold text-red-800 mb-2">
                ⚠️ High Cancellation Alert
              </h5>
              <p className="text-sm text-red-700">
                Oil changes have 34% cancellation rate (↑12% from last month)
              </p>
              <p className="text-xs text-red-600 mt-1">
                Main reason: `&apos;`Too expensive`&apos;` - Consider
                promotional pricing
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h5 className="font-semibold text-green-800 mb-2">
                ✅ Recovery Success
              </h5>
              <p className="text-sm text-green-700">
                Tire rotations: 67% of cancelled appointments rebooked within 7
                days
              </p>
              <p className="text-xs text-green-600 mt-1">
                Best performing message: Safety-focused emails
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h5 className="font-semibold text-blue-800 mb-2">
                📊 Optimal Timing
              </h5>
              <p className="text-sm text-blue-700">
                Customers respond best to follow-ups sent 2 hours after
                cancellation
              </p>
              <p className="text-xs text-blue-600 mt-1">
                Tuesday 10AM has highest rebooking rate (23%)
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h5 className="font-semibold text-purple-800 mb-2">
                💡 Recommendation
              </h5>
              <p className="text-sm text-purple-700">
                Add `&apos;`urgency`&apos;` messaging to brake service
                follow-ups
              </p>
              <p className="text-xs text-purple-600 mt-1">
                Similar shops saw 41% increase in rebookings
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="pb-20 pt-30 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-inter">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Three powerful tools that automatically recover lost revenue from
            automotive service cancellations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => setActiveExample(index)}
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-inter">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600 mb-4 font-inter">
                {feature.description}
              </p>
              <p className="text-sm text-gray-500 mb-4">{feature.detail}</p>
              <Button
                variant="outline"
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                See Example
              </Button>
            </div>
          ))}
        </div>

        {/* Modal for examples */}
        {activeExample !== null && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {features[activeExample].title} Example
                  </h3>
                  <button
                    onClick={() => setActiveExample(null)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                {features[activeExample].example}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AutoHowItWorks;
