
import { MessageCircle, Bell, BookOpen, Calendar, User, CheckCircle2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Communication = () => {
  return (
    <div id="communication" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <MessageCircle className="h-4 w-4 mr-2" />
            Seamless Communication
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Connecting Teachers and Parents
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance the educational experience with tools designed to improve communication and classroom management.
          </p>
        </div>

        <Tabs defaultValue="messaging" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="messaging">Push Messaging</TabsTrigger>
              <TabsTrigger value="classbook">Virtual Classbook</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="messaging" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-gray-900">
                  Real-Time Messaging That Connects
                </h3>
                <p className="text-lg text-gray-600">
                  Our push messaging system creates a direct communication channel between teachers and parents, 
                  ensuring important updates are delivered instantly.
                </p>
                
                <div className="space-y-4 mt-6">
                  {[
                    {
                      icon: Bell,
                      title: "Instant Notifications",
                      description: "Send real-time alerts about attendance, grades, and school activities."
                    },
                    {
                      icon: User,
                      title: "Personalized Communication",
                      description: "Deliver targeted messages directly to specific parents regarding their child."
                    },
                    {
                      icon: CheckCircle2,
                      title: "Delivery Confirmation",
                      description: "Verify when messages have been received and read by parents."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex">
                      <div className="flex-shrink-0 h-10 w-10 rounded-md bg-accent/10 flex items-center justify-center mr-4">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-md font-semibold text-gray-900">{item.title}</h4>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-md mx-auto">
                  <div className="bg-primary p-4 text-white flex items-center justify-between">
                    <div className="flex items-center">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      <span className="font-semibold">School Updates</span>
                    </div>
                    <Bell className="h-5 w-5" />
                  </div>
                  <div className="p-4 space-y-4">
                    {[
                      {
                        title: "Math Quiz Tomorrow",
                        message: "Please remind Emma to bring her calculator for tomorrow's math quiz covering chapters 5-7.",
                        time: "10:30 AM",
                        sender: "Mr. Johnson"
                      },
                      {
                        title: "Field Trip Permission",
                        message: "The science museum field trip permission slip is due by Friday. Please sign and return it with Emma.",
                        time: "Yesterday",
                        sender: "School Admin"
                      }
                    ].map((message, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <h5 className="font-semibold text-gray-900">{message.title}</h5>
                          <span className="text-sm text-gray-500">{message.time}</span>
                        </div>
                        <p className="text-gray-700 text-sm mt-1">{message.message}</p>
                        <div className="mt-2 text-xs text-right text-gray-500">From: {message.sender}</div>
                      </div>
                    ))}
                    
                    <div className="h-10 flex items-center justify-center border-t text-primary text-sm font-medium cursor-pointer">
                      View All Messages
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="classbook" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-md mx-auto">
                  <div className="bg-secondary p-4 text-white flex items-center justify-between">
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <span className="font-semibold">Virtual Classbook</span>
                    </div>
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-3">Class 7B - Weekly Overview</h4>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between">
                          <span className="font-medium">Mathematics</span>
                          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">92% Attendance</span>
                        </div>
                        <p className="text-sm mt-1">Topics: Quadratic Equations, Probability</p>
                        <div className="flex items-center mt-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                          <span>Homework due Friday</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between">
                          <span className="font-medium">Science</span>
                          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">96% Attendance</span>
                        </div>
                        <p className="text-sm mt-1">Topics: Photosynthesis, Cell Division</p>
                        <div className="flex items-center mt-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                          <span>Test on Monday</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between">
                          <span className="font-medium">English Literature</span>
                          <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">85% Attendance</span>
                        </div>
                        <p className="text-sm mt-1">Topics: Shakespeare's Sonnets</p>
                        <div className="flex items-center mt-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                          <span>Essay submission next Tuesday</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Digital Classbook at Your Fingertips
                </h3>
                <p className="text-lg text-gray-600">
                  Our Virtual Classbook simplifies classroom management by digitizing attendance, 
                  assignments, grades, and student performance tracking.
                </p>
                
                <div className="space-y-4 mt-6">
                  {[
                    {
                      icon: BookOpen,
                      title: "Comprehensive Tracking",
                      description: "Track attendance, assignments, grades, and student performance in one place."
                    },
                    {
                      icon: Bell,
                      title: "Real-time Updates",
                      description: "Parents receive instant updates about their child's performance and attendance."
                    },
                    {
                      icon: Calendar,
                      title: "Integrated Planning",
                      description: "Plan lessons, assignments, and parent-teacher meetings with our integrated calendar."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex">
                      <div className="flex-shrink-0 h-10 w-10 rounded-md bg-secondary/10 flex items-center justify-center mr-4">
                        <item.icon className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="text-md font-semibold text-gray-900">{item.title}</h4>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Communication;
