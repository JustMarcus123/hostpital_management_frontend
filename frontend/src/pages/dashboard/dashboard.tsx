import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="grid grid-cols-5 gap-6">
                {/* Sidebar */}
                <div className="col-span-1 bg-white rounded-lg shadow-sm p-4">
                    <div className="flex items-center mb-6">
                        <img src="/hospital-logo.png" alt="Hospital" className="w-12 h-12 mr-3" />
                        <h2 className="text-xl font-semibold">Hospital</h2>
                    </div>
                    <nav>
                        <ul className="space-y-2">
                            {['Dashboard', 'Patients', 'Staffs', 'Lab Reports', 'My Team', 'Chat'].map((item) => (
                                <li key={item} className="py-2 px-3 hover:bg-purple-50 rounded cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="col-span-3 space-y-6">
                    {/* Overview Cards */}
                    <div className="grid grid-cols-3 gap-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Patients</CardTitle>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-muted-foreground">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="8.5" cy="7" r="4" />
                                    <polyline points="17 11 19 13 23 9" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">2,543</div>
                                <p className="text-xs text-green-500">+12% from last 7 days</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Urgent</CardTitle>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-muted-foreground">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">24</div>
                                <p className="text-xs text-green-500">+5% from last 7 days</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Surgery</CardTitle>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-muted-foreground">
                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="12" x2="12" y1="18" y2="12" />
                                    <line x1="9" x2="15" y1="15" y2="15" />
                                </svg>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">137</div>
                                <p className="text-xs text-yellow-500">+3.5% from last 7 days</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Patient List */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Patient List</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <table className="w-full text-sm text-left">
                                <thead>
                                    <tr>
                                        <th className="py-2">Patient ID</th>
                                        <th>Patient Name</th>
                                        <th>Date Check In</th>
                                        <th>Disease</th>
                                        <th>Room No</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { id: '#A-125011', name: 'Jaydon Vettrove', date: '20.03.2023', disease: 'Ventricular', room: 'A-105' },
                                        { id: '#A-125012', name: 'Jokob Gouse', date: '20.03.2023', disease: 'Maze surgery', room: 'A-125' },
                                        { id: '#A-125013', name: 'Kaylyn Gelidi', date: '18.03.2023', disease: 'Angioplasty', room: 'B-23' },
                                        { id: '#A-125013', name: 'Marilyn Culhane', date: '18.03.2023', disease: 'Angioplasty', room: 'B-23' }
                                    ].map((patient, index) => (
                                        <tr key={index} className="border-t">
                                            <td className="py-2">{patient.id}</td>
                                            <td>{patient.name}</td>
                                            <td>{patient.date}</td>
                                            <td>{patient.disease}</td>
                                            <td>{patient.room}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </CardContent>
                    </Card>

                    {/* Consultations */}
                    <div className="grid grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Planned Consultation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {[
                                    { name: 'Micki Smith', age: '46 years', date: '10.12.2023' },
                                    { name: 'Ann Chovey', age: '67 years', date: '10.12.2023' },
                                    { name: 'Hazel Nutt', age: '62 years', date: '10.12.2023' }
                                ].map((consultation, index) => (
                                    <div key={index} className="flex justify-between items-center py-2 border-b">
                                        <div>
                                            <div className="font-medium">{consultation.name}</div>
                                            <div className="text-sm text-gray-500">{consultation.age}</div>
                                        </div>
                                        <div className="flex space-x-2">
                                            <Button variant="outline" size="sm">Reject</Button>
                                            <Button size="sm">Accept</Button>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Standard Consultation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {[
                                    { name: 'Barb Akew', age: '32 years', date: '10.12.2023' },
                                    { name: 'Aida Bugg', age: '65 years', date: '10.12.2023' }
                                ].map((consultation, index) => (
                                    <div key={index} className="flex justify-between items-center py-2 border-b">
                                        <div>
                                            <div className="font-medium">{consultation.name}</div>
                                            <div className="text-sm text-gray-500">{consultation.age}</div>
                                        </div>
                                        <div className="flex space-x-2">
                                            <Button variant="outline" size="sm">Reject</Button>
                                            <Button size="sm">Accept</Button>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="col-span-1 bg-white rounded-lg shadow-sm p-4">
                    <div className="flex items-center mb-6">
                        <img src="/hospital-logo.png" alt="Hospital" className="w-12 h-12 mr-3" />
                        <h2 className="text-xl font-semibold">Hospital</h2>
                    </div>
                    <nav>
                        <ul className="space-y-2">
                            {['Dashboard', 'Patients', 'Staffs', 'Lab Reports', 'My Team', 'Chat'].map((item) => (
                                <li key={item} className="py-2 px-3 hover:bg-purple-50 rounded cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;