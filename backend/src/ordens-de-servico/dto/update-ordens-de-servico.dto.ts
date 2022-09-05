import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdensDeServicoDto } from './create-ordens-de-servico.dto';

export class UpdateOrdensDeServicoDto extends PartialType(CreateOrdensDeServicoDto) {}
