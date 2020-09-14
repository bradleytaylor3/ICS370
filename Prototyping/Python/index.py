import tkinter as tk
from tkinter import ttk
import mysql.connector

window = tk.Tk()
window.geometry('600x900')
window.title("Search for requirements by major")

search_button = tk.Frame(window, width=50)
clear_button = tk.Frame(window, width=50)
search_frame = tk.Frame(window, width=500)
search_label_frame = tk.Frame(window)
goal_one_frame = tk.Frame(window)
separating_frame = tk.Frame(window, width=590, height=1, bg="gray")
major_frame_label = tk.Frame(window)
dropdown_frame = tk.Frame(window)
notebook_frame = tk.Frame(window)

btn_search = tk.Button(search_button, text="Search")
btn_clear = tk.Button(clear_button, text="Clear search")
btn_search.pack()
btn_clear.pack()
search_button.place(x=375, y=45)
clear_button.place(x=425, y=45)

search_entry = tk.Entry(master=search_frame, width=30, font=('Verdana', 14))
search_label = tk.Label(master=search_label_frame, text="Search for your major", font=('Verdana', 14))
search_entry.pack()
search_label.pack()
search_label_frame.place(x=5, y=10)
search_frame.place(x=5, y=45)

separating_frame.place(x=5, y=85)

tkvar = tk.StringVar(window)
dropdown_label = tk.Label(master=major_frame_label, text="Or, select your major from below", font=('Verdana', 14))
dropdown_label.pack()
major_frame_label.place(x=5, y=100)

choices = {'Computer Application Development', 'Computer Science', 'English'}

popup_menu = tk.OptionMenu(dropdown_frame, tkvar, *choices)
popup_menu.config(width=40, font=('Verdana', 10))
popup_menu.pack()
dropdown_frame.place(x=5, y=130)

notebook = ttk.Notebook(notebook_frame)
tab1 = tk.Frame(notebook, width=580, height=620, background="white")
tab2 = tk.Frame(notebook, width=580, height=620, background="white")
tab3 = tk.Frame(notebook, width=580, height=620, background="white")
tab4 = tk.Frame(notebook, width=580, height=620, background="white")
tab5 = tk.Frame(notebook, width=580, height=620, background="white")
tab6 = tk.Frame(notebook, width=580, height=620, background="white")
tab7 = tk.Frame(notebook, width=580, height=620, background="white")
tab8 = tk.Frame(notebook, width=580, height=620, background="white")
tab9 = tk.Frame(notebook, width=580, height=620, background="white")
tab10 = tk.Frame(notebook, width=580, height=620, background="white")
tab11 = tk.Frame(notebook, width=580, height=620, background="white")
tab12 = tk.Frame(notebook, width=580, height=620, background="white")

notebook.add(tab1, text="Goal 1")
notebook.add(tab2, text="Goal 2")
notebook.add(tab3, text="Goal 3")
notebook.add(tab4, text="Goal 4")
notebook.add(tab5, text="Goal 5")
notebook.add(tab6, text="Goal 6")
notebook.add(tab7, text="Goal 7")
notebook.add(tab8, text="Goal 8")
notebook.add(tab9, text="Goal 9")
notebook.add(tab10, text="Goal 10")
notebook.add(tab11, text="Core Courses")
notebook.add(tab12, text="Electives")

notebook.pack()
notebook_frame.place(x=10, y=250)

mydb = mysql.connector.connect(
    host="localhost",
    username="root",
    password="ue=ERc9hiu-t6.2diN:CL=Wz"
)

print(mydb)

window.mainloop()
