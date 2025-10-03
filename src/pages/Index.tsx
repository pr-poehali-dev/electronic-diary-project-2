import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedDay, setSelectedDay] = useState("Понедельник");

  const grades = [
    { subject: "Математика", grade: 5, color: "bg-gradient-to-br from-green-400 to-emerald-500" },
    { subject: "Русский язык", grade: 4, color: "bg-gradient-to-br from-blue-400 to-blue-500" },
    { subject: "Физика", grade: 5, color: "bg-gradient-to-br from-purple-400 to-purple-500" },
    { subject: "История", grade: 4, color: "bg-gradient-to-br from-amber-400 to-orange-500" },
    { subject: "Химия", grade: 5, color: "bg-gradient-to-br from-pink-400 to-pink-500" },
    { subject: "Английский", grade: 4, color: "bg-gradient-to-br from-cyan-400 to-cyan-500" },
  ];

  const homework = [
    { subject: "Математика", task: "Решить задачи №45-52", deadline: "01.20.2025", done: false },
    { subject: "Русский язык", task: "Написать сочинение", deadline: "01.22.2025", done: true },
    { subject: "Физика", task: "Подготовить доклад", deadline: "01.25.2025", done: false },
    { subject: "История", task: "Прочитать §12-14", deadline: "01.21.2025", done: false },
  ];

  const schedule = {
    "Понедельник": [
      { time: "08:00", subject: "Математика", teacher: "Иванова А.П.", room: "201" },
      { time: "09:00", subject: "Русский язык", teacher: "Петрова М.И.", room: "305" },
      { time: "10:00", subject: "Физика", teacher: "Сидоров В.К.", room: "112" },
      { time: "11:00", subject: "История", teacher: "Смирнова Л.Н.", room: "403" },
    ],
    "Вторник": [
      { time: "08:00", subject: "Химия", teacher: "Козлов Д.С.", room: "215" },
      { time: "09:00", subject: "Английский", teacher: "Морозова О.В.", room: "308" },
      { time: "10:00", subject: "Математика", teacher: "Иванова А.П.", room: "201" },
      { time: "11:00", subject: "Физкультура", teacher: "Васильев И.П.", room: "Спортзал" },
    ],
  };

  const teachers = [
    { name: "Иванова А.П.", subject: "Математика", initials: "ИА", color: "bg-blue-500" },
    { name: "Петрова М.И.", subject: "Русский язык", initials: "ПМ", color: "bg-green-500" },
    { name: "Сидоров В.К.", subject: "Физика", initials: "СВ", color: "bg-purple-500" },
    { name: "Смирнова Л.Н.", subject: "История", initials: "СЛ", color: "bg-amber-500" },
  ];

  const chats = [
    { id: 1, name: "Математика - 10А", lastMessage: "Домашнее задание на понедельник", time: "14:30", unread: 3 },
    { id: 2, name: "Иванова А.П.", lastMessage: "Напоминаю о контрольной", time: "13:15", unread: 1 },
    { id: 3, name: "Класс 10А", lastMessage: "Завтра встречаемся у входа", time: "12:00", unread: 0 },
  ];

  const averageGrade = (grades.reduce((acc, g) => acc + g.grade, 0) / grades.length).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto p-4 md:p-6 max-w-7xl">
        <header className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Электронный дневник
              </h1>
              <p className="text-muted-foreground mt-1">Ученик: Иванов Иван Иванович, 10А класс</p>
            </div>
            <Avatar className="h-16 w-16 border-4 border-white shadow-lg">
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xl font-bold">
                ИИ
              </AvatarFallback>
            </Avatar>
          </div>
          
          <Card className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Средний балл</p>
                <p className="text-4xl font-bold">{averageGrade}</p>
              </div>
              <div className="text-right">
                <p className="text-sm opacity-90">Успеваемость</p>
                <Progress value={parseFloat(averageGrade) * 20} className="w-32 h-2 mt-2 bg-white/20" />
              </div>
            </div>
          </Card>
        </header>

        <Tabs defaultValue="grades" className="space-y-6">
          <TabsList className="grid grid-cols-5 w-full h-auto p-1 bg-white shadow-md">
            <TabsTrigger value="grades" className="gap-2 py-3 data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Icon name="Star" size={18} />
              <span className="hidden sm:inline">Оценки</span>
            </TabsTrigger>
            <TabsTrigger value="homework" className="gap-2 py-3 data-[state=active]:bg-green-500 data-[state=active]:text-white">
              <Icon name="BookOpen" size={18} />
              <span className="hidden sm:inline">Домашка</span>
            </TabsTrigger>
            <TabsTrigger value="schedule" className="gap-2 py-3 data-[state=active]:bg-purple-500 data-[state=active]:text-white">
              <Icon name="Calendar" size={18} />
              <span className="hidden sm:inline">Расписание</span>
            </TabsTrigger>
            <TabsTrigger value="teachers" className="gap-2 py-3 data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              <Icon name="Users" size={18} />
              <span className="hidden sm:inline">Учителя</span>
            </TabsTrigger>
            <TabsTrigger value="chat" className="gap-2 py-3 data-[state=active]:bg-pink-500 data-[state=active]:text-white">
              <Icon name="MessageCircle" size={18} />
              <span className="hidden sm:inline">Чат</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="grades" className="space-y-4 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {grades.map((item, index) => (
                <Card key={index} className="overflow-hidden hover-scale border-0 shadow-lg">
                  <div className={`${item.color} p-6 text-white`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{item.subject}</h3>
                        <p className="text-sm opacity-90">Кладэ</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 border border-white/30">
                        <span className="text-3xl font-bold">{item.grade}</span>
                      </div>
                    </div>
                    <p className="text-xs opacity-75 mt-2">01.20.2025</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="homework" className="space-y-4 animate-fade-in">
            {homework.map((item, index) => (
              <Card key={index} className="p-6 hover-scale border-l-4 border-l-blue-500 shadow-md">
                <div className="flex items-start gap-4">
                  <Checkbox 
                    checked={item.done}
                    className="mt-1 h-5 w-5"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{item.subject}</h3>
                        <p className={`text-sm mt-1 ${item.done ? 'line-through text-muted-foreground' : ''}`}>
                          {item.task}
                        </p>
                      </div>
                      <Badge variant={item.done ? "secondary" : "default"} className="whitespace-nowrap">
                        <Icon name="Clock" size={14} className="mr-1" />
                        {item.deadline}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="schedule" className="space-y-4 animate-fade-in">
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
              {Object.keys(schedule).map((day) => (
                <Button
                  key={day}
                  variant={selectedDay === day ? "default" : "outline"}
                  onClick={() => setSelectedDay(day)}
                  className="whitespace-nowrap"
                >
                  {day}
                </Button>
              ))}
            </div>

            <div className="space-y-3">
              {schedule[selectedDay as keyof typeof schedule]?.map((lesson, index) => (
                <Card key={index} className="p-5 hover-scale border-l-4 border-l-purple-500 shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 rounded-xl p-3 min-w-[70px] text-center">
                      <Icon name="Clock" size={20} className="mx-auto mb-1 text-purple-600" />
                      <p className="text-sm font-semibold text-purple-700">{lesson.time}</p>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{lesson.subject}</h3>
                      <p className="text-sm text-muted-foreground">{lesson.teacher}</p>
                    </div>
                    <Badge variant="outline" className="gap-1">
                      <Icon name="MapPin" size={14} />
                      {lesson.room}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="teachers" className="space-y-4 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {teachers.map((teacher, index) => (
                <Card key={index} className="p-6 hover-scale shadow-md">
                  <div className="flex items-center gap-4">
                    <Avatar className={`${teacher.color} h-16 w-16 text-white text-xl font-bold`}>
                      <AvatarFallback className={teacher.color}>{teacher.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{teacher.name}</h3>
                      <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                    </div>
                    <Button size="sm" variant="outline" className="gap-2">
                      <Icon name="MessageCircle" size={16} />
                      Написать
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="chat" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[600px]">
              <Card className="lg:col-span-1 p-4 shadow-md">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Icon name="MessageCircle" size={20} />
                  Чаты
                </h3>
                <ScrollArea className="h-[520px]">
                  <div className="space-y-2">
                    {chats.map((chat) => (
                      <div
                        key={chat.id}
                        className="p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors border"
                      >
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="font-semibold text-sm">{chat.name}</h4>
                          <span className="text-xs text-muted-foreground">{chat.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground truncate flex-1">{chat.lastMessage}</p>
                          {chat.unread > 0 && (
                            <Badge className="ml-2 bg-blue-500">{chat.unread}</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </Card>

              <Card className="lg:col-span-2 p-4 shadow-md flex flex-col">
                <div className="border-b pb-3 mb-4">
                  <h3 className="font-semibold text-lg">Математика - 10А</h3>
                  <p className="text-sm text-muted-foreground">24 участника</p>
                </div>
                
                <ScrollArea className="flex-1 mb-4 pr-4">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8 bg-blue-500">
                        <AvatarFallback className="bg-blue-500 text-white text-xs">ИА</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="bg-muted rounded-2xl rounded-tl-sm p-3 inline-block max-w-[80%]">
                          <p className="text-sm font-semibold mb-1">Иванова А.П.</p>
                          <p className="text-sm">Напоминаю: завтра контрольная работа по алгебре</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 ml-2">14:30</p>
                      </div>
                    </div>

                    <div className="flex gap-3 justify-end">
                      <div className="flex-1 flex justify-end">
                        <div className="bg-blue-500 text-white rounded-2xl rounded-tr-sm p-3 inline-block max-w-[80%]">
                          <p className="text-sm">Хорошо, спасибо за напоминание!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollArea>

                <div className="flex gap-2">
                  <Input placeholder="Написать сообщение..." className="flex-1" />
                  <Button size="icon" className="bg-blue-500 hover:bg-blue-600">
                    <Icon name="Send" size={18} />
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
