import os
import shutil
# Get the list of all files and directories
path = "D:/blank-data/files/games/"
dir_list = os.listdir(path)
print("Files and directories in '", path, "' :")
# prints all files
'''
for i in range(len(dir_list)):
    dir_list[i] = dir_list[i].replace(".html", '')
    os.makedirs(path + dir_list[i])
    shutil.move(path + dir_list[i] + ".html", path + dir_list[i])
    os.rename(path + dir_list[i] + "/" +  dir_list[i] + ".html", path + dir_list[i] + "/" + "index.html")
'''
newDict = {}
for i in range(len(dir_list)):
    newDict[dir_list[i]] = dir_list[i].title().replace("-", " ")

for i in range(10):
    print(" ")  
print(newDict)