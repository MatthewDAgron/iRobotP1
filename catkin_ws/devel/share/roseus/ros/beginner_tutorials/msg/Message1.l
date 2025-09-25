;; Auto-generated. Do not edit!


(when (boundp 'beginner_tutorials::Message1)
  (if (not (find-package "BEGINNER_TUTORIALS"))
    (make-package "BEGINNER_TUTORIALS"))
  (shadow 'Message1 (find-package "BEGINNER_TUTORIALS")))
(unless (find-package "BEGINNER_TUTORIALS::MESSAGE1")
  (make-package "BEGINNER_TUTORIALS::MESSAGE1"))

(in-package "ROS")
;;//! \htmlinclude Message1.msg.html


(defclass beginner_tutorials::Message1
  :super ros::object
  :slots (_data _number ))

(defmethod beginner_tutorials::Message1
  (:init
   (&key
    ((:data __data) "")
    ((:number __number) 0)
    )
   (send-super :init)
   (setq _data (string __data))
   (setq _number (round __number))
   self)
  (:data
   (&optional __data)
   (if __data (setq _data __data)) _data)
  (:number
   (&optional __number)
   (if __number (setq _number __number)) _number)
  (:serialization-length
   ()
   (+
    ;; string _data
    4 (length _data)
    ;; int32 _number
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; string _data
       (write-long (length _data) s) (princ _data s)
     ;; int32 _number
       (write-long _number s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; string _data
     (let (n) (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4) (setq _data (subseq buf ptr- (+ ptr- n))) (incf ptr- n))
   ;; int32 _number
     (setq _number (sys::peek buf ptr- :integer)) (incf ptr- 4)
   ;;
   self)
  )

(setf (get beginner_tutorials::Message1 :md5sum-) "f8a480cda4575b0a5f510728d861e631")
(setf (get beginner_tutorials::Message1 :datatype-) "beginner_tutorials/Message1")
(setf (get beginner_tutorials::Message1 :definition-)
      "string data
int32 number

")



(provide :beginner_tutorials/Message1 "f8a480cda4575b0a5f510728d861e631")


