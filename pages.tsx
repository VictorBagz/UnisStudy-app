import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, BookOpen, Clock, Download, FileText, Upload, Users } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

export default function LecturerDashboard() {
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Dr. Smith</h1>
        <p className="text-muted-foreground">Here's an overview of your teaching resources.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">This semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Resources</CardTitle>
            <FileText className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground">Across all courses</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Student Engagement</CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76%</div>
            <p className="text-xs text-muted-foreground">Average resource access rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Downloads</CardTitle>
            <Download className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground">This semester</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Resource Engagement</CardTitle>
            <CardDescription>Student interaction with your uploaded materials</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-end gap-2">
              <div className="flex-1 bg-primary/10 rounded-t-md h-[60%] relative group">
                <div className="absolute inset-x-0 bottom-full mb-2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary text-primary-foreground text-xs rounded px-2 py-1">60%</div>
                </div>
                <div className="absolute inset-x-0 -bottom-6 text-xs text-center">Mon</div>
              </div>
              <div className="flex-1 bg-primary/10 rounded-t-md h-[75%] relative group">
                <div className="absolute inset-x-0 bottom-full mb-2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary text-primary-foreground text-xs rounded px-2 py-1">75%</div>
                </div>
                <div className="absolute inset-x-0 -bottom-6 text-xs text-center">Tue</div>
              </div>
              <div className="flex-1 bg-primary/10 rounded-t-md h-[65%] relative group">
                <div className="absolute inset-x-0 bottom-full mb-2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary text-primary-foreground text-xs rounded px-2 py-1">65%</div>
                </div>
                <div className="absolute inset-x-0 -bottom-6 text-xs text-center">Wed</div>
              </div>
              <div className="flex-1 bg-primary/10 rounded-t-md h-[80%] relative group">
                <div className="absolute inset-x-0 bottom-full mb-2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary text-primary-foreground text-xs rounded px-2 py-1">80%</div>
                </div>
                <div className="absolute inset-x-0 -bottom-6 text-xs text-center">Thu</div>
              </div>
              <div className="flex-1 bg-primary/10 rounded-t-md h-[90%] relative group">
                <div className="absolute inset-x-0 bottom-full mb-2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary text-primary-foreground text-xs rounded px-2 py-1">90%</div>
                </div>
                <div className="absolute inset-x-0 -bottom-6 text-xs text-center">Fri</div>
              </div>
              <div className="flex-1 bg-primary/10 rounded-t-md h-[40%] relative group">
                <div className="absolute inset-x-0 bottom-full mb-2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary text-primary-foreground text-xs rounded px-2 py-1">40%</div>
                </div>
                <div className="absolute inset-x-0 -bottom-6 text-xs text-center">Sat</div>
              </div>
              <div className="flex-1 bg-primary/10 rounded-t-md h-[30%] relative group">
                <div className="absolute inset-x-0 bottom-full mb-2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary text-primary-foreground text-xs rounded px-2 py-1">30%</div>
                </div>
                <div className="absolute inset-x-0 -bottom-6 text-xs text-center">Sun</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Course Engagement</CardTitle>
            <CardDescription>Student participation by course</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="font-medium">Introduction to Psychology</div>
                <div className="text-muted-foreground">92%</div>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="font-medium">Cognitive Neuroscience</div>
                <div className="text-muted-foreground">78%</div>
              </div>
              <Progress value={78} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="font-medium">Research Methods</div>
                <div className="text-muted-foreground">64%</div>
              </div>
              <Progress value={64} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="recent">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="recent">Recent Uploads</TabsTrigger>
            <TabsTrigger value="popular">Most Popular</TabsTrigger>
          </TabsList>
          <Link href="/dashboard/lecturer/upload">
            <Button className="gap-1">
              <Upload className="h-4 w-4" />
              Upload New
            </Button>
          </Link>
        </div>
        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>Introduction to Psychology</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />2 hours ago
                </div>
              </div>
              <CardDescription>Week 3 Materials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Lecture Notes: Cognitive Development</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-muted-foreground">PDF • 2.4 MB • 42 downloads</p>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <BarChart3 className="h-3 w-3" />
                        <span className="sr-only">View Stats</span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Week 3 Assignment Guidelines</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-muted-foreground">DOCX • 1.1 MB • 38 downloads</p>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <BarChart3 className="h-3 w-3" />
                        <span className="sr-only">View Stats</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="popular" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>Research Methods</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Download className="mr-1 h-3 w-3" />
                  256 downloads
                </div>
              </div>
              <CardDescription>Final Exam Preparation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium">Exam Review Guide</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-muted-foreground">PDF • 3.2 MB • 256 downloads</p>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <BarChart3 className="h-3 w-3" />
                        <span className="sr-only">View Stats</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
