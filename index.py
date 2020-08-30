import tkinter as tk
from tkinter import ttk

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

window.mainloop()
