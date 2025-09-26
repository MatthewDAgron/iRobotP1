i love crickets

source ~/catkin_we/devel/setup.bash

roscore

ros launch turtlebot_gazebo turtlebot_world.launch



cd ~/catkin_ws
catkin_make
echo "source ~/catkin_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
