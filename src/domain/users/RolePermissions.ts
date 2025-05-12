import { Permission } from './Permission';
import { UserType } from './UserType';

export const RolePermissions: Record<UserType, Permission[]> = {
    admin: [
      'create_client', 'read_client', 'update_client', 'delete_client',
      'create_tutor', 'read_tutor', 'update_tutor', 'delete_tutor',
      'create_course', 'read_course', 'update_course', 'delete_course',
      'create_student', 'read_student', 'update_student', 'delete_student',
    ],
    client: [
      'create_tutor', 'read_tutor', 'update_tutor', 'delete_tutor',
      'create_course', 'read_course', 'update_course', 'delete_course',
      'create_student', 'read_student', 'update_student', 'delete_student',
    ],
    tutor: [
      'read_course',
      'read_student',
    ],
    student: [
      'read_course',
    ],
  };
  